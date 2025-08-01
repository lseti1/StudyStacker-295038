using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyStacker.Models;
using StudyStacker.Data;

namespace StudyStacker.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DeckController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DeckController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Deck>> PostDeck(Deck deck)
        {
            _context.Decks.Add(deck);
            await _context.SaveChangesAsync();
            return Ok(deck);
        }

        [HttpGet]
        public async Task<ActionResult<List<Deck>>> GetDecks()
        {
            var decks = await _context.Decks.ToListAsync();
            return Ok(decks);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDeck(int id, Deck updatedDeck)
        {
            if (id != updatedDeck.Id)
                return BadRequest();

            _context.Entry(updatedDeck).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Decks.Any(e => e.Id == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeck(int id)
        {
            var deck = await _context.Decks.FindAsync(id);
            if (deck == null)
                return NotFound();

            _context.Decks.Remove(deck);

            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}