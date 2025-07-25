using Microsoft.AspNetCore.Mvc;
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

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.Flashcards.ToList());
        }
    }
}