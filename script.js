
function generateTikTokAuthUrl(clientId, redirectUri, scope, state = null) {
    const baseUrl = "https://www.tiktok.com/v2/auth/authorize/";
    const params = new URLSearchParams();
    params.append("client_key", clientId);
    params.append("redirect_uri", redirectUri);
    params.append("scope", scope);
    params.append("response_type", "code");
    if (state) {
      params.append("state", state);
    }

    const authUrl = `${baseUrl}?${params.toString()}`;
    return authUrl;
  }
  function getURL() {
    const data = {
      url: document.getElementById("url").value,
      count: 12,
      cursor: 0,
      web: 1,
      hd: 1,
    };

    fetch("https://www.tikwm.com/api/", {
      method: "POST", // Méthode POST
      headers: {
        "Content-Type": "application/json", // Type de contenu JSON
      },
      body: JSON.stringify(data), // Conversion des données en chaîne JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        return response.json(); // Conversion de la réponse en JSON
      })
      .then((result) => {
        let element =
          "<video controls width='250'> <source src='https://www.tikwm.com" +
          result.data.play +
          "' type='video/mp4' /></video>";
        element += "<br>";
        element += "<textarea>" + result.data.title + "</textarea>";

        document.getElementById("rep").innerHTML = element;
        console.log(result);
      });
  }
  // get token
  function getToken(url)
  {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
    value: value
    }));
}
