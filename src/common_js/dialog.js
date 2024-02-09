class MessageHandler {
  constructor() {
    this.container = document.createElement('div');
    this.container.style.position = 'fixed';
    this.container.style.top = '-50px'; // Initial position above the viewport
    this.container.style.right = '0px';
    this.container.style.width = '400px';
    this.container.style.padding = '5px';
    this.container.style.borderRadius = '5px';
    this.container.style.fontFamily = 'Arial, sans-serif';
    this.container.style.fontSize = '14px'
    this.container.style.zIndex = '9999';
    this.container.style.transition = 'top 0.5s ease-in-out'; // Add a sliding transition

    document.body.appendChild(this.container);
  }

  showMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;

    switch (type) {
      case 'info':
        messageElement.style.backgroundColor = '#3498db';
        break;
      case 'warning':
        messageElement.style.backgroundColor = '#f39c12';
        break;
      case 'error':
        messageElement.style.backgroundColor = '#e74c3c';
        break;
      case 'success':
        messageElement.style.backgroundColor = '#2ba722';
        break;
      default:
        break;
    }

    messageElement.style.color = '#fff';
    messageElement.style.padding = '8px';
    messageElement.style.marginBottom = '5px';
    messageElement.style.borderRadius = '3px';
    messageElement.style.opacity = '0.9';
    this.container.appendChild(messageElement);

    // Trigger reflow before changing the top value to start the sliding animation
    // This ensures that the transition happens
    void messageElement.offsetWidth;

    // Slide the container down to reveal the message
    this.container.style.top = '65px';

    // Remove the message and slide the container up after 5 seconds
    setTimeout(() => {
      this.container.style.top = '-50px';
      // Remove the message after the sliding animation completes
      setTimeout(() => {
        this.container.removeChild(messageElement);
      }, 500);
    }, 5000);
  }

  info(message) {
    this.showMessage(message, 'info');
  }

  warn(message) {
    this.showMessage(message, 'warning');
  }

  err(message) {
    this.showMessage(message, 'error');
  }

  success(message) {
    this.showMessage(message, 'success');
  }
}

const dialog = new MessageHandler();