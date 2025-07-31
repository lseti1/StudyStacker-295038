using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyStacker.Models;
using StudyStacker.Data;

namespace StudyStacker.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FlashcardsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FlashcardsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateFlashcard([FromBody] Flashcard flashcard)
        {
            _context.Flashcards.Add(flashcard);
            await _context.SaveChangesAsync();
            return Ok(flashcard);
        }

        [HttpGet("deck/{deckId}")]
        public async Task<ActionResult<List<Flashcard>>> GetFlashcardsByDeck(int deckId)
        {
            var flashcards = await _context.Flashcards.Where(f => f.DeckID == deckId).ToListAsync();
            return Ok(flashcards);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFlashcard(int id, Flashcard UpdateFlashcard)
        {
            var flashcard = await _context.Flashcards.FindAsync(id);

            if (flashcard == null)
                return NotFound();

            flashcard.Question = UpdateFlashcard.Question;
            flashcard.Answer = UpdateFlashcard.Answer;

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}