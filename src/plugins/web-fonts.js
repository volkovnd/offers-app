export default function () {
  import("webfontloader").then((WebFont) => {
    WebFont.load({
      google: {
        families: ["Open Sans:400,500,700:cyrillic,latin"],
      },
    });
  });
}
