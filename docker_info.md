## Installation de Docker :

1. Assurez-vous d'avoir Docker installé sur votre machine. Vous pouvez le télécharger et l'installer à partir du [site web officiel de Docker](https://www.docker.com/).
   
## Vérification des attributs du dossier :

1. Ouvrez l'invite de commande en tant qu'administrateur.
2. Naviguez jusqu'au dossier pour lequel vous souhaitez changer les attributs. Par exemple, si le dossier est sur le lecteur C: et s'appelle "myfolder", vous pouvez y accéder en tapant :

    ```bash
    cd C:\chemin\vers\myfolder
    ```

3. Une fois que vous êtes dans le dossier, vous pouvez supprimer l'attribut de lecture seule de tous les fichiers et sous-dossiers avec cette commande :

    ```bash
    attrib -r /s /d
    ```

   Cette commande supprime l'attribut de lecture seule (-r) de tous les fichiers et sous-dossiers (/s /d) dans le dossier actuel.

## Création d'un fichier Dockerfile :

1. Créez un fichier `Dockerfile` à la racine de votre projet. Ce fichier définit l'environnement de votre application et les instructions pour construire l'image Docker.

## Configuration du Dockerfile :

1. Utilisez le fichier `Dockerfile` pour définir l'environnement de votre application. Voici un exemple de `Dockerfile` pour une application Next.js :

    ```Dockerfile
    # Utilisez une image Node.js pour construire votre application
    FROM node:16

    # Définissez le répertoire de travail dans le conteneur
    WORKDIR /app

    # Copiez les fichiers package.json et package-lock.json dans le répertoire de travail
    COPY package*.json ./

    # Installez les dépendances de votre application
    RUN npm install

    # Copiez le reste de votre application dans le répertoire de travail
    COPY . .

    # Construisez votre application pour la production
    RUN npm run build

    # Exposez le port sur lequel votre application sera accessible
    EXPOSE 3000

    # Définissez la commande pour démarrer votre application
    CMD ["npm", "start"]
    ```

## Création de l'image Docker :

1. Ouvrez un terminal et naviguez jusqu'au répertoire de votre projet (où se trouve votre Dockerfile).
2. Exécutez la commande suivante pour créer l'image Docker de votre application :

    ```shell
    docker build -t nom-de-votre-application .
    ```

## Lancement du conteneur Docker :

1. Une fois l'image Docker créée, vous pouvez lancer un conteneur à partir de cette image en utilisant la commande suivante :

    ```shell
    docker run -p 3000:3000 nom-de-votre-application
    ```

   L'option `-p 3000:3000` permet de faire correspondre le port 3000 du conteneur au port 3000 de votre machine locale.

## Accédez à votre application :

1. Ouvrez un navigateur et accédez à [http://localhost:3000](http://localhost:3000) pour voir votre application en action.

## Arrêtez le conteneur Docker :

1. Lorsque vous avez terminé, vous pouvez arrêter le conteneur Docker en utilisant la commande suivante :

    ```shell
    docker stop identifiant-du-conteneur
    ```


    ----------

    # Publier votre image Docker sur Docker Hub

1. **Créez un compte sur Docker Hub**
   - Si vous n'avez pas déjà de compte Docker Hub, allez sur [Docker Hub](https://hub.docker.com/) et inscrivez-vous.

2. **Connectez-vous à Docker Hub**
   - Ouvrez un terminal et connectez-vous à Docker Hub en utilisant la commande suivante :
     ```shell
     docker login
     ```
   - Vous serez invité à entrer votre nom d'utilisateur et votre mot de passe Docker Hub. Une fois connecté, vous pouvez pousser des images sur Docker Hub.

3. **Taggez votre image Docker**
   - Avant de pousser votre image sur Docker Hub, vous devez la tagger avec le nom de votre dépôt Docker Hub. Utilisez la commande suivante pour tagger votre image :
     ```shell
     docker tag votre-nom-dappli votreusername/votre-nom-dappli
     ```
     Remplacez `votre-nom-dappli` par le nom de votre image et `bastienvdb90` (nom d'utilisateur Docker Hub).

4. **Créez un dépôt sur Docker Hub**
   - Connectez-vous à Docker Hub, allez sur la page "Repositories" et cliquez sur le bouton "Create Repository".
   - Donnez un nom à votre dépôt (il doit correspondre au nom que vous avez utilisé pour tagger votre image) et configurez les autres paramètres selon vos besoins.

5. **Poussez votre image sur Docker Hub**
   - Utilisez la commande suivante pour pousser votre image sur Docker Hub :
     ```shell
     docker push votreusername/votre-nom-dappli
     ```
     Remplacez `votre-nom-dappli` par le nom de votre image et `bastienvdb90` par votre nom d'utilisateur Docker Hub.

6. **Vérifiez le téléchargement de votre image**
   - Une fois la commande terminée, retournez sur Docker Hub et naviguez vers la page de votre dépôt pour vérifier que votre image a été téléchargée.

7. **Partagez votre image**
   - Vous pouvez maintenant partager l'URL de votre dépôt Docker Hub avec d'autres personnes afin qu'elles puissent télécharger et utiliser votre image Docker.

En suivant ces étapes, vous pouvez publier votre image Docker sur Docker Hub et la partager avec d'autres.

