namespace StudyStacker.Models
{
    public class Deck
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<Flashcard> Flashcards { get; set; } = new();
    }
}