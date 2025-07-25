using Microsoft.EntityFrameworkCore;
using StudyStacker.Models; 

namespace StudyStacker.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        // This exposes the Flashcards table to EF Core
        public DbSet<Flashcard> Flashcards { get; set; }

    }
}