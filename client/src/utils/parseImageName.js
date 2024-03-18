export const parseImageName = (name) => {
  
  // Removes/changes special characters that don't allow the image to load
  var imageName;
  if (name.substr(name.length - 1) === "♂") {
    imageName = name.slice(0, -1) + "-m";
  } else if (name.substr(name.length - 1) === "♀") {
    imageName = name.slice(0, -1) + "-f";
  } else {
    imageName = name.replace(/[']/g, ""); // (')
    imageName = imageName.replace(/\. /g, "-"); // (. )
    imageName = imageName.replace(/\./g, ""); // (.)
    imageName = imageName.replace(/: /g, "-"); // (:)
    imageName = imageName.replace(/[éèêëēėę]/g, "e"); // variations of e 
    imageName = imageName.replace(/ /g, "-"); // ( )
  }

  // Handling naming edge cases that cannot be managed programmatically  
  if (name === "Shaymin") {
    imageName = "shaymin-land";
  } else if (name === "Giratina") {
    imageName = "giratina-altered";
  } else if (name === "Oricorio") {
    imageName = "oricorio-baile";
  } else if (name === "Lycanroc") {
    imageName = "lycanroc-midday";
  } else if (name === "Wishiwashi") {
    imageName = "wishiwashi-solo";
  }

  return imageName;
};
