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
    }
}