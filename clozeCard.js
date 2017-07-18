var ClozeCard = function(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text;
}

module.exports = ClozeCard;