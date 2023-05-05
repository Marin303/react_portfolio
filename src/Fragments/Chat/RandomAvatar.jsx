function randomAvatar() {
    const avatarsContext = require.context("../../Components/Chat/images", false, /\.png$/);
    const avatars = avatarsContext.keys().map(avatarsContext);
  
    let lastAvatarIndex = null;
  
    function getRandomAvatar() {
      let index = Math.floor(Math.random() * avatars.length);
      while (index === lastAvatarIndex) {
        index = Math.floor(Math.random() * avatars.length);
      }
      lastAvatarIndex = index;
      return avatars[index];
    }
  
    return getRandomAvatar();
  }
  
  export default randomAvatar;
  