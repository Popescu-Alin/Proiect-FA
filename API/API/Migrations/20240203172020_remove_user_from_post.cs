using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class remove_user_from_post : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_UserDTO_UserId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_Posts_UserDTO_UserId",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Posts_UserId",
                table: "Posts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserDTO",
                table: "UserDTO");

            migrationBuilder.RenameTable(
                name: "UserDTO",
                newName: "UserDTOs");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Posts",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserDTOs",
                table: "UserDTOs",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_UserDTOs_UserId",
                table: "Comments",
                column: "UserId",
                principalTable: "UserDTOs",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_UserDTOs_UserId",
                table: "Comments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserDTOs",
                table: "UserDTOs");

            migrationBuilder.RenameTable(
                name: "UserDTOs",
                newName: "UserDTO");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Posts",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserDTO",
                table: "UserDTO",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_UserId",
                table: "Posts",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_UserDTO_UserId",
                table: "Comments",
                column: "UserId",
                principalTable: "UserDTO",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_UserDTO_UserId",
                table: "Posts",
                column: "UserId",
                principalTable: "UserDTO",
                principalColumn: "Id");
        }
    }
}
