import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data =
    [
      {
        "id": 1,
        "name": "John Smith",
        "job": "Software Engineer"
      },
      {
        "id": 2,
        "name": "Emily Johnson",
        "job": "Data Scientist"
      },
      {
        "id": 3,
        "name": "Michael Williams",
        "job": "Product Manager"
      },
      {
        "id": 4,
        "name": "Emma Jones",
        "job": "Marketing Specialist"
      },
      {
        "id": 5,
        "name": "Daniel Brown",
        "job": "Financial Analyst"
      },
      {
        "id": 6,
        "name": "Olivia Davis",
        "job": "Graphic Designer"
      },
      {
        "id": 7,
        "name": "Matthew Miller",
        "job": "Human Resources Manager"
      },
      {
        "id": 8,
        "name": "Ava Wilson",
        "job": "Sales Representative"
      },
      {
        "id": 9,
        "name": "Sophia Taylor",
        "job": "Web Developer"
      },
      {
        "id": 10,
        "name": "William Anderson",
        "job": "Accountant"
      },
      {
        "id": 11,
        "name": "Isabella Thomas",
        "job": "Project Manager"
      },
      {
        "id": 12,
        "name": "James Jackson",
        "job": "UX Designer"
      },
      {
        "id": 13,
        "name": "Mia White",
        "job": "Operations Manager"
      },
      {
        "id": 14,
        "name": "Benjamin Harris",
        "job": "Software Developer"
      },
      {
        "id": 15,
        "name": "Charlotte Martin",
        "job": "Data Analyst"
      },
      {
        "id": 16,
        "name": "Logan Thompson",
        "job": "Content Writer"
      },
      {
        "id": 17,
        "name": "Harper Garcia",
        "job": "IT Consultant"
      },
      {
        "id": 18,
        "name": "Elijah Martinez",
        "job": "Business Analyst"
      },
      {
        "id": 19,
        "name": "Amelia Robinson",
        "job": "Customer Service Representative"
      },
      {
        "id": 20,
        "name": "Sebastian Clark",
        "job": "Network Administrator"
      },
      {
        "id": 21,
        "name": "Avery Rodriguez",
        "job": "Quality Assurance Analyst"
      },
      {
        "id": 22,
        "name": "Lily Lewis",
        "job": "Social Media Manager"
      },
      {
        "id": 23,
        "name": "Jackson Lee",
        "job": "Systems Analyst"
      },
      {
        "id": 24,
        "name": "Abigail Walker",
        "job": "Technical Writer"
      },
      {
        "id": 25,
        "name": "Ethan Hall",
        "job": "Business Development Manager"
      },
      {
        "id": 26,
        "name": "Elizabeth Young",
        "job": "Database Administrator"
      },
      {
        "id": 27,
        "name": "David Hernandez",
        "job": "Financial Manager"
      },
      {
        "id": 28,
        "name": "Sofia King",
        "job": "IT Manager"
      },
      {
        "id": 29,
        "name": "Aiden Wright",
        "job": "Market Research Analyst"
      },
      {
        "id": 30,
        "name": "Chloe Lopez",
        "job": "Product Designer"
      },
      {
        "id": 31,
        "name": "Joseph Hill",
        "job": "Software Architect"
      },
      {
        "id": 32,
        "name": "Victoria Green",
        "job": "Technical Support Specialist"
      },
      {
        "id": 33,
        "name": "Madison Adams",
        "job": "Web Designer"
      },
      {
        "id": 34,
        "name": "Henry Baker",
        "job": "Art Director"
      },
      {
        "id": 35,
        "name": "Grace Perez",
        "job": "Data Engineer"
      },
      {
        "id": 36,
        "name": "Samuel Turner",
        "job": "Financial Analyst"
      },
      {
        "id": 37,
        "name": "Aubrey Collins",
        "job": "HR Specialist"
      },
      {
        "id": 38,
        "name": "Zoey Cook",
        "job": "Marketing Manager"
      },
      {
        "id": 39,
        "name": "Gabriel Murphy",
        "job": "Operations Analyst"
      },
      {
        "id": 40,
        "name": "Addison Rivera",
        "job": "Software Tester"
      },
      {
        "id": 41,
        "name": "Aria Rogers",
        "job": "UX Researcher"
      },
      {
        "id": 42,
        "name": "Grayson Morgan",
        "job": "Business Consultant"
      },
      {
        "id": 43,
        "name": "Scarlett Peterson",
        "job": "Customer Success Manager"
      },
      {
        "id": 44,
        "name": "Leo Cooper",
        "job": "Front-end Developer"
      },
      {
        "id": 45,
        "name": "Layla Reed",
        "job": "IT Support Specialist"
      },
      {
        "id": 46,
        "name": "Lucas Bailey",
        "job": "Marketing Coordinator"
      },
      {
        "id": 47,
        "name": "Nora Phillips",
        "job": "Product Manager"
      },
      {
        "id": 48,
        "name": "Carter Evans",
        "job": "Software Engineer"
      },
      {
        "id": 49,
        "name": "Hannah Ross",
        "job": "Technical Project Manager"
      },
      {
        "id": 50,
        "name": "Eli Nelson",
        "job": "Web Developer"
      },
      {
        "id": 51,
        "name": "Scarlet Hill",
        "job": "Account Manager"
      },
      {
        "id": 52,
        "name": "Nathan Simmons",
        "job": "Data Scientist"
      },
      {
        "id": 53,
        "name": "Penelope Foster",
        "job": "Financial Analyst"
      },
      {
        "id": 54,
        "name": "Liam Griffin",
        "job": "Graphic Designer"
      },
      {
        "id": 55,
        "name": "Hazel Butler",
        "job": "Human Resources Manager"
      },
      {
        "id": 56,
        "name": "Zachary Hayes",
        "job": "Sales Representative"
      },
      {
        "id": 57,
        "name": "Stella Simmons",
        "job": "Web Developer"
      },
      {
        "id": 58,
        "name": "Violet Patterson",
        "job": "Accountant"
      },
      {
        "id": 59,
        "name": "Gabriel Foster",
        "job": "Accountant"
      },
      {
        "id": 60,
        "name": "Jackson Ramirez",
        "job": "Project Manager"
      },
      {
        "id": 61,
        "name": "Leah Simmons",
        "job": "UX Designer"
      },
      {
        "id": 62,
        "name": "Nathan Powell",
        "job": "Operations Manager"
      },
      {
        "id": 63,
        "name": "Olivia Patterson",
        "job": "IT Consultant"
      },
      {
        "id": 64,
        "name": "Eli Ross",
        "job": "Business Analyst"
      },
      {
        "id": 65,
        "name": "Avery Reed",
        "job": "Customer Service Representative"
      },
      {
        "id": 66,
        "name": "Evelyn Cox",
        "job": "Network Administrator"
      },
      {
        "id": 67,
        "name": "Isaac Simmons",
        "job": "Quality Assurance Analyst"
      },
      {
        "id": 68,
        "name": "Mia Turner",
        "job": "Social Media Manager"
      },
      {
        "id": 69,
        "name": "Lucas Watson",
        "job": "Systems Analyst"
      },
      {
        "id": 70,
        "name": "Lily Richardson",
        "job": "Technical Writer"
      },
      {
        "id": 71,
        "name": "Ethan Bryant",
        "job": "Business Development Manager"
      },
      {
        "id": 72,
        "name": "Ava Henderson",
        "job": "Database Administrator"
      },
      {
        "id": 73,
        "name": "Mason Reed",
        "job": "Financial Manager"
      },
      {
        "id": 74,
        "name": "Harper King",
        "job": "IT Manager"
      },
      {
        "id": 75,
        "name": "Evelyn Adams",
        "job": "Software Architect"
      },
      {
        "id": 76,
        "name": "Logan Green",
        "job": "Technical Support Specialist"
      },
      {
        "id": 77,
        "name": "Aria Martinez",
        "job": "Web Designer"
      },
      {
        "id": 78,
        "name": "Carter Lewis",
        "job": "Art Director"
      },
      {
        "id": 79,
        "name": "Scarlett Clark",
        "job": "Data Engineer"
      },
      {
        "id": 80,
        "name": "Jameson Turner",
        "job": "Financial Analyst"
      },
      {
        "id": 81,
        "name": "Penelope Walker",
        "job": "HR Specialist"
      },
      {
        "id": 82,
        "name": "Mateo Hill",
        "job": "Marketing Coordinator"
      },
      {
        "id": 83,
        "name": "Luna Mitchell",
        "job": "Software Tester"
      },
      {
        "id": 84,
        "name": "Zoe Perez",
        "job": "UX Researcher"
      },
      {
        "id": 85,
        "name": "Henry Morgan",
        "job": "Business Consultant"
      },
      {
        "id": 86,
        "name": "Aurora Peterson",
        "job": "Customer Success Manager"
      },
      {
        "id": 87,
        "name": "Wyatt Cooper",
        "job": "Front-end Developer"
      },
      {
        "id": 88,
        "name": "Bella Reed",
        "job": "IT Support Specialist"
      },
      {
        "id": 89,
        "name": "Grayson Bailey",
        "job": "Marketing Coordinator"
      },
      {
        "id": 90,
        "name": "Nora Griffin",
        "job": "Graphic Designer"
      },
      {
        "id": 91,
        "name": "Elijah Hayes",
        "job": "Human Resources Manager"
      },
      {
        "id": 92,
        "name": "Layla Simmons",
        "job": "Sales Representative"
      },
      {
        "id": 93,
        "name": "Miles Turner",
        "job": "Web Developer"
      },
      {
        "id": 94,
        "name": "Avery Young",
        "job": "Accountant"
      },
      {
        "id": 95,
        "name": "Scarlett Hernandez",
        "job": "Project Manager"
      },
      {
        "id": 96,
        "name": "Lucas Adams",
        "job": "UX Designer"
      },
      {
        "id": 97,
        "name": "Aria Thompson",
        "job": "Operations Manager"
      },
      {
        "id": 98,
        "name": "Ethan Collins",
        "job": "IT Consultant"
      },
      {
        "id": 99,
        "name": "Lily Powell",
        "job": "Business Analyst"
      },
      {
        "id": 100,
        "name": "Olivia Reed",
        "job": "Customer Service Representative"
      }
    ];
  getAllData() {
    return this.data;
  }

}
