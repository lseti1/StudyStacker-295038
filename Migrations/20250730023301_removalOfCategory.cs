using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StudyStacker_295038.Migrations
{
    /// <inheritdoc />
    public partial class removalOfCategory : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "Flashcards");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Flashcards",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
