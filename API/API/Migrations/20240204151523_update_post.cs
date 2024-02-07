using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class update_post : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "Date",
                table: "Posts",
                type: "datetimeoffset",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserDTO",
                table: "UserDTO",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_UserDTO_UserId",
                table: "Comments",
                column: "UserId",
                principalTable: "UserDTO",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_UserDTO_UserId",
                table: "Comments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserDTO",
                table: "UserDTO");

            migrationBuilder.DropColumn(
                name: "Date",
                table: "Posts");

            migrationBuilder.RenameTable(
                name: "UserDTO",
                newName: "UserDTOs");

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
    }
}
