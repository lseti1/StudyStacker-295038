namespace StudyStacker.Models
{
    public class Flashcard
    {
        public int Id { get; set; }
        public string Question { get; set; } = string.Empty;
        public string Answer { get; set; } = string.Empty;

        // Foreign Keys/Navigation Prop
        public int DeckID { get; set; }
        public Deck? Deck { get; set; }

    }
}