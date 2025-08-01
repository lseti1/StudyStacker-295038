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

        [HttpPost] // POST = Adding
        public async Task<IActionResult> CreateFlashcard([FromBody] Flashcard flashcard)
        {
            _context.Flashcards.Add(flashcard);
            await _context.SaveChangesAsync();
            return Ok(flashcard);
        }

        [HttpGet("deck/{deckId}")] // GET = Showing on screen/retrieving data
        public async Task<ActionResult<List<Flashcard>>> GetFlashcardsByDeck(int deckId)
        {
            var flashcards = await _context.Flashcards.Where(f => f.DeckID == deckId).ToListAsync();
            return Ok(flashcards);
        }

        [HttpPut("{id}")] // Updating
        public async Task<IActionResult> UpdateFlashcard(int id, [FromBody] Flashcard UpdateFlashcard)
        {
            if (id != UpdateFlashcard.Id)
                return BadRequest();

            var flashcard = await _context.Flashcards.FindAsync(id);
            if (flashcard == null)
                return NotFound();

            flashcard.Question = UpdateFlashcard.Question;
            flashcard.Answer = UpdateFlashcard.Answer;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFlashcard(int id)
        {
            var flashcard = await _context.Flashcards.FindAsync(id);
            if (flashcard == null)
                return NotFound();

            _context.Flashcards.Remove(flashcard);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}