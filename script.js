
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
    // get user info
  function getUser(accessToken)
  {
    fetch("https://cors-anywhere.herokuapp.com/https://open.tiktokapis.com/v2/user/info/?fields=open_id,union_id,avatar_url,display_name", {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      return response.json()
    }).then((result) => {
        console.log(result);
      //console.log(result.creator_avatar_url);
      //console.log(result.display_name);
    })
  }


