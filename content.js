// Function to click the chatStartStopButton once
function clickChatStartStopButtonOnce() {
  const button = document.getElementById('chatStartStopButton');
  if (button) {
    button.click();
    console.log('Clicked chatStartStopButton once');
  } else {
    console.log('Button with ID "chatStartStopButton" not found.');
  }
}

// Function to click the chatStartStopButton twice
function clickChatStartStopButtonTwice() {
  const button = document.getElementById('chatStartStopButton');
  if (button) {
    button.click();
    setTimeout(() => {
      button.click();
    }, 100); // Small delay between clicks
    console.log('Clicked chatStartStopButton twice');
  } else {
    console.log('Button with ID "chatStartStopButton" not found.');
  }
}

// Function to store detected male names in localStorage
function storeDetectedName(name) {
  console.log("hii")
  // Retrieve existing stored names or initialize an empty array
  const storedNames = JSON.parse(localStorage.getItem('detectedNames')) || [];
  // Add the new name to the array
  storedNames.push(name);
  // Save the updated array back to localStorage
  localStorage.setItem('detectedNames', JSON.stringify(storedNames));
  console.log('Stored detected name:', name);
}

// Function to check for status messages and male users
function autoEscapeMalesAndCheckStatus() {
  const messageItems = document.querySelectorAll('.messageitem');
  const statusMsgs = document.querySelectorAll('.status-msg');

  // Check for status messages with 'left' text
  statusMsgs.forEach(status => {
    if (status.textContent.toLowerCase().includes('left')) {
      clickChatStartStopButtonOnce();
    }
  });

  // Check for male users
  messageItems.forEach(item => {
    const boldTag = item.querySelector('.message b');
    if (boldTag) {
      const textContent = boldTag.textContent.toLowerCase();

      // Comprehensive list of male names and indicators, including Indian names
      const maleIndicators = [
        'man', 'guy', 'dude', 'bro', 'gentleman', 'sir', 'mr', 'mister',
        'he', 'his', 'him', 'boy', 'gentleman', 'dude', 'brother', 'male user', 
        'male participant', 'male friend', 'male member', 'male viewer', 'male guest',
        'adam', 'alex', 'andrew', 'ben', 'brian', 'chris', 'dan', 'david', 'daniel',
        'edward', 'elijah', 'ethan', 'frank', 'george', 'greg', 'henry', 'jack',
        'james', 'john', 'joseph', 'josh', 'jude', 'kevin', 'liam', 'lucas',
        'matthew', 'michael', 'nathan', 'nick', 'oliver', 'patrick', 'paul', 
        'peter', 'robert', 'ryan', 'samuel', 'steven', 'thomas', 'tyler', 
        'william', 'zachary',

        // Indian Male Names
        'aarav', 'adi', 'ajay', 'akshay', 'anil', 'arjun', 'avik', 'bikram', 
        'chirag', 'darshan', 'deepak', 'dev', 'dinesh', 'gautam', 'girish', 
        'harish', 'hemant', 'indra', 'ishaan', 'jay', 'kamal', 'kiran', 
        'krishna', 'manoj', 'mukesh', 'naveen', 'neeraj', 'nikhil', 'om', 
        'pradeep', 'rahul', 'raj', 'ravi', 'rohit', 'sandeep', 'sanjay', 
        'saurabh', 'shyam', 'siddharth', 'suresh', 'tej', 'uday', 'vijay', 
        'vivek', 'yash'
      ];

      // Check if any keyword is present in the text content
      const isMale = maleIndicators.some(indicator => textContent.includes(indicator.toLowerCase()));
      if (isMale) {
        // Store the detected male name in localStorage
        storeDetectedName(textContent);

        // Hide the message
        item.style.display = 'none';
        console.log('Hiding male message and clicking chatStartStopButton twice');
        // Click the button twice
        clickChatStartStopButtonTwice();
      }
    }
  });
}

// Run the function periodically to catch new messages and status updates
setInterval(autoEscapeMalesAndCheckStatus, 500);
