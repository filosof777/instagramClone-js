let comment = [
  
]
let namesArr = 
  "Aimee Aleksandra Alice Alicia Allison Alyssa Amy Andrea Angel Angela \
  Ann Anna Anne Anne Marie Annie Ashley Barbara Beatrice Beth Betty \
  Brenda Brooke Candace Cara Caren Carol Caroline Carolyn Carrie \
  Cassandra Catherine Charlotte Chrissy Christen Christina Christine \
  Christy Claire Claudia Courtney Crystal Cynthia Dana Danielle Deanne \
  Deborah Deirdre Denise Diane Dianne Dorothy Eileen Elena Elizabeth \
  Emily Erica Erin Frances Gina Giulietta Heather Helen Jane Janet Janice \
  Jenna Jennifer Jessica Joanna Joyce Julia Juliana Julie Justine Kara \
  Karen Katharine Katherine Kathleen Kathryn Katrina Kelly Kerry Kim \
  Kimberly Kristen Kristina Kristine Laura Laurel Lauren Laurie Leah \
  Linda Lisa Lori Marcia Margaret Maria Marina Marisa Martha Mary Mary \
  Ann Maya Melanie Melissa Michelle Monica Nancy Natalie Nicole Nina \
  Pamela Patricia Rachel Rebecca Renee Sandra Sara Sharon Sheri Shirley \
  Sonia Stefanie Stephanie Susan Suzanne Sylvia Tamara Tara Tatiana Terri \
  Theresa Tiffany Tracy Valerie Veronica Vicky Vivian Wendy".split(' ');

for (let i = 0; i <= 15; i++) {
  if (namesArr[i] != '') {

  comment.push(
    {
      userName : namesArr[i],
      src : `img/men/${i}.jpg`,
      massages : "Lorem ipsum dolor sit amet."
    }
    )
  }
}

console.log(comment);