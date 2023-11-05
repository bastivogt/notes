export function stripTags(str) {
  return str.replace(/(<([^>]+)>)/gi, "");
}

export function stripDoubleN(str) {
  return str.split("\n\n").join("");
}

/*export function nl2br(str, nl = false) {
  if (!nl) return str.split("\n").join("[br]");
  return str.split("\n").join("[br]");
}*/

export function nl2br(str) {
  return str.split("\n").join("<br />");
}

export function __replacer(str, obj) {
  let text = str;
  obj.forEach((item) => {
    text = text.split(item.tag).join(item.html);
  });
  return text;
}

export function replacer(str) {
  const o = [
    //{ tag: "\n", html: "" },

    { tag: "[br]", html: "<br />" },

    { tag: "[i]", html: "<em>" },
    { tag: "[/i]", html: "</em>" },

    { tag: "[u]", html: "<u>" },
    { tag: "[/u]", html: "</u>" },

    { tag: "[s]", html: "<s>" },
    { tag: "[/s]", html: "</s>" },

    { tag: "[b]", html: "<strong>" },
    { tag: "[/b]", html: "</strong>" },

    //{ tag: "\n", html: "<br />" },

    { tag: "[ul]", html: "<ul>" },
    { tag: "[/ul]", html: "</ul>" },

    { tag: "[ol]", html: "<ol>" },
    { tag: "[/ol]", html: "</ol>" },

    { tag: "[li]", html: "<li>" },
    { tag: "[/li]", html: "</li>" },

    { tag: "[p]", html: "<p>" },
    { tag: "[/p]", html: "</p>" },

    //{ tag: "[div]", html: "<div>" },
    //{ tag: "[/div]", html: "</div>" },

    //{ tag: "[", html: "<" },
    //{ tag: "]", html: ">" },

    { tag: "[a", html: "<a" },
    { tag: "a]", html: "a>" },
    { tag: '"]', html: '">' },
    { tag: "']", html: "'>" },
    { tag: "[/", html: "</" },

    { tag: "[img", html: "<img" },

    { tag: "\n", html: "<br />" },
    { tag: "<ul><br />", html: "<ul>" },
    { tag: "</ul><br />", html: "</ul>" },
    { tag: "<ol><br />", html: "<ol>" },
    { tag: "</ol><br />", html: "</ol>" },
    { tag: "<li><br />", html: "<li>" },
    { tag: "</li><br />", html: "</li>" },
    { tag: "<p><br />", html: "<p>" },
    { tag: "</p><br />", html: "</p>" },
  ];
  return __replacer(str, o);
}
