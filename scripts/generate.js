const fs = require("fs");
const path = require("path");

// Configuration
const TOTAL_FILES = 80000;
const TESTS_PER_FILE = 10;
const FILES_PER_DIR = 100;

// Function to generate a random test case
function generateTestCase(testNumber) {
  const operations = [
    "addition",
    "subtraction",
    "multiplication",
    "division",
    "string concatenation",
    "array manipulation",
    "object properties",
    "boolean operations",
    "number comparison",
    "string manipulation",
  ];

  const operation = operations[testNumber % operations.length];

  return `
    test('${operation} test case ${testNumber}', () => {
        ${generateTestImplementation(operation)}
    });`;
}

// Function to generate test implementation based on operation type
function generateTestImplementation(operation) {
  switch (operation) {
    case "addition":
      return "expect(2 + 2).toBe(4);";
    case "subtraction":
      return "expect(5 - 3).toBe(2);";
    case "multiplication":
      return "expect(3 * 4).toBe(12);";
    case "division":
      return "expect(10 / 2).toBe(5);";
    case "string concatenation":
      return 'expect("hello" + "world").toBe("helloworld");';
    case "array manipulation":
      return "expect([1, 2, 3].length).toBe(3);";
    case "object properties":
      return 'expect({ name: "test" }.name).toBe("test");';
    case "boolean operations":
      return "expect(true && true).toBe(true);";
    case "number comparison":
      return "expect(10 > 5).toBe(true);";
    case "string manipulation":
      return 'expect("test".toUpperCase()).toBe("TEST");';
  }
}

// Function to generate a single test file
function generateTestFile(fileIndex) {
  const testCases = Array.from({ length: TESTS_PER_FILE }, (_, i) =>
    generateTestCase(fileIndex * TESTS_PER_FILE + i)
  ).join("\n");

  return `
describe('Test Suite ${fileIndex}', () => {${testCases}
});`;
}

// Function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Main function to generate all test files
async function generateTestFiles() {
  console.time("Test generation");

  for (let i = 0; i < TOTAL_FILES; i++) {
    // Calculate directory number (0-based)
    const dirNumber = Math.floor(i / FILES_PER_DIR);
    const dirPath = path.join("__tests__", `suite_${dirNumber}`);

    // Ensure directory exists
    ensureDirectoryExists(dirPath);

    // Generate file content
    const fileContent = generateTestFile(i);

    // Write file
    const fileName = path.join(dirPath, `test${i}.test.js`);
    fs.writeFileSync(fileName, fileContent);

    // Log progress every 1000 files
    if (i % 1000 === 0) {
      console.log(`Generated ${i} files...`);
    }
  }

  console.timeEnd("Test generation");
  console.log(`Successfully generated ${TOTAL_FILES} test files.`);
}

// Create base __tests__ directory if it doesn't exist
ensureDirectoryExists("__tests__");

// Run the generator
generateTestFiles().catch(console.error);
