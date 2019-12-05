const utils = {
  isExternalLink: function(link: string) {
    return link.substring(0, 4) == "http";
  }
};

export default utils;
