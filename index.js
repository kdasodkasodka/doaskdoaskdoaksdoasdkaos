function getIP(callback) {
    const ipRequest = new XMLHttpRequest();
    ipRequest.open("GET", "https://api.ipify.org?format=json");
    ipRequest.onload = function () {
      const response = JSON.parse(ipRequest.responseText);
      const ip = response.ip;
      callback(ip);
    };
    ipRequest.send();
  }
  
  function sendIPtoDiscord(ip) {
    const webhookURL = "https://discordapp.com/api/webhooks/1082777453375803446/7lUkyi6g-Cx-5kkUyjaTlUIkh_2r_lMIQzJ9xqErK7Wc34FJwfPCzpQhx7KZPtR_Mi_V"; 
    const message = `O  IP ${ip} acabou de baixar o cheat.`;
    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
        username: "IP",
      }),
    });
  }
  getIP(sendIPtoDiscord);