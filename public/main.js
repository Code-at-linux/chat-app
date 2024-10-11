const socket = io();

// Send message to server
document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    const messageInput = document.getElementById('message');
    const msg = messageInput.value;
    if (msg) {
        socket.emit('chat message', msg); // Send message to server
        messageInput.value = ''; // Clear input field
    }
});

// Receive message from server
socket.on('chat message', function(msg) {
    const messages = document.getElementById('messages');
    const newMessage = document.createElement('li');
    newMessage.textContent = msg;
    messages.appendChild(newMessage); // Add message to the chat
});

