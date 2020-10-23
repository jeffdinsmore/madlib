$(document).ready(function () {
  $("#formOne").submit(function (event) {
    const pluralNoun1Input = $("input#pluralNoun1").val();
    const pluralNoun2Input = $("input#pluralNoun2").val();
    const pluralNoun3Input = $("input#pluralNoun3").val();
    const pluralNoun4Input = $("input#pluralNoun4").val();
    const verb1Input = $("input#verb1").val();
    const noun1Input = $("input#noun1").val();
    const noun2Input = $("input#noun2").val();
    const ingVerbInput = $("input#ingVerb").val();

    $(".pluralNoun1").append(pluralNoun1Input);
    $(".pluralNoun2").append(pluralNoun2Input);
    $(".pluralNoun3").append(pluralNoun3Input);
    $(".pluralNoun4").append(pluralNoun4Input);
    $(".verb1").append(verb1Input);
    $(".noun1").append(noun1Input);
    $(".noun2").append(noun2Input);
    $(".ingVerb").append(ingVerbInput);

    $(".pluralNoun1").text(pluralNoun1Input);
    $(".pluralNoun2").text(pluralNoun2Input);
    $(".pluralNoun3").text(pluralNoun3Input);
    $(".pluralNoun4").text(pluralNoun4Input);
    $(".verb1").text(verb1Input);
    $(".noun1").text(noun1Input);
    $(".noun2").text(noun2Input);
    $(".ingVerb").text(ingVerbInput);

    $(".story").show();
    event.preventDefault();
  });

});