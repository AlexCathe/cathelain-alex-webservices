# PUT et PATCH
**Quelle est la différence entre un PUT un PATCH**
<br>
La méthode PATCH applique des modifications partielles sur une ressource tandis que la méthode PUT modifie entièrement l'objet.
<br>
# FETCH/AXIOS
**Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?**
<br>
A cause du CORS, qui s'appliquent aux naviguateurs et non aux agent (postman simule un agent et non un naviguateur).
# NGINX/APACHE
**Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?**
<br>
La présence d'un serveur apache ou nginx peut être justifié par plusieurs point :
- S'en servir comme reverse proxy
- Pouvoir profité du cache serveur
- Pouvoir gérer le CORS côté serveur et non directement dans l'application
<br>
# PERFORMANCES
**Citez 3 axes vus en cours pour améliorer les performance d'une api Rest**
<br>
- L'utilisation du cache
- l'optimisation des requêtes avec indexation des tables
- l'utilisation du load balancing 
