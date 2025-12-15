// ===== Books Module =====

// Borrowing period in days
const BORROWING_DAYS = 15;

// Books data organized by department (from Excel file LIB-25.xlsx)
const DEPARTMENT_BOOKS = {
    'computer-science': [
        { title: "Programming With 'C'", author: 'Gottfried', image: 'https://covers.openlibrary.org/b/isbn/9780070240353-L.jpg' },
        { title: 'Fundamentals of Computers', author: 'V. Rajaraman', image: 'https://covers.openlibrary.org/b/isbn/9788120311206-L.jpg' },
        { title: 'IBM PC & Clones', author: 'Govindarajulu', image: 'https://covers.openlibrary.org/b/isbn/9780074603116-L.jpg' },
        { title: 'Introduction to Computers', author: 'Subramanyan', image: 'https://covers.openlibrary.org/b/isbn/9788122427523-L.jpg' },
        { title: 'Digital Electronics & Introduction to Microprocessor', author: 'Kamat', image: 'https://covers.openlibrary.org/b/isbn/9788120308718-L.jpg' },
        { title: 'Digital Fundamentals', author: 'Floyd', image: 'https://covers.openlibrary.org/b/isbn/9780132359238-L.jpg' },
        { title: 'Digital Principles & Applications', author: 'Malvino', image: 'https://covers.openlibrary.org/b/isbn/9780070400856-L.jpg' },
        { title: 'Microprocessors', author: 'Gaonkar', image: 'https://covers.openlibrary.org/b/isbn/9788122421552-L.jpg' },
        { title: 'Computer Organisation & Architecture', author: 'Stallings', image: 'https://covers.openlibrary.org/b/isbn/9780131856448-L.jpg' },
        { title: 'Java Programming Language', author: 'Arnold', image: 'https://covers.openlibrary.org/b/isbn/9780134462028-L.jpg' },
        { title: 'Computer Networks', author: 'Tanenbaum', image: 'https://covers.openlibrary.org/b/isbn/9780132126953-L.jpg' },
        { title: 'Operating Systems Concepts', author: 'Galvin', image: 'https://covers.openlibrary.org/b/isbn/9781118063330-L.jpg' },
        { title: 'Database System Concepts', author: 'Korth', image: 'https://covers.openlibrary.org/b/isbn/9780073523323-L.jpg' },
        { title: 'Let Us C', author: 'Kanetkar', image: 'https://covers.openlibrary.org/b/isbn/9788176569309-L.jpg' },
        { title: 'Data Structures Using C', author: 'Tanenbaum', image: 'https://covers.openlibrary.org/b/isbn/9780131997462-L.jpg' }
    ],
    'mechanical': [
        { title: 'Thermal Engineering in SI Units', author: 'P.L. Ballaney', image: 'https://covers.openlibrary.org/b/isbn/9788174091390-L.jpg' },
        { title: 'A Textbook of Mechanical Technology', author: 'R.S. Khurmi', image: 'https://covers.openlibrary.org/b/isbn/9788121925242-L.jpg' },
        { title: 'Theory of Machines', author: 'R.S. Khurmi & J.K. Gupta', image: 'https://covers.openlibrary.org/b/isbn/9788121925129-L.jpg' },
        { title: 'Production Technology', author: 'R.K. Jain', image: 'https://covers.openlibrary.org/b/isbn/9788174091581-L.jpg' },
        { title: 'Engineering Drawing Vol.I', author: 'K.R. Gopalakrishna', image: 'https://covers.openlibrary.org/b/isbn/9788185594132-L.jpg' },
        { title: 'A Textbook of Hydraulics & Fluid Mechanics', author: 'R.S. Khurmi', image: 'https://covers.openlibrary.org/b/isbn/9788121916660-L.jpg' },
        { title: 'Workshop Technology Vol.I', author: 'Hajra Choudhury', image: 'https://covers.openlibrary.org/b/isbn/9788185099224-L.jpg' },
        { title: 'Workshop Technology Vol.II', author: 'Hajra Choudhury', image: 'https://covers.openlibrary.org/b/isbn/9788185099231-L.jpg' },
        { title: 'Machine Design', author: 'R.S. Khurmi', image: 'https://covers.openlibrary.org/b/isbn/9788121925372-L.jpg' },
        { title: 'Strength of Materials', author: 'R.K. Bansal', image: 'https://covers.openlibrary.org/b/isbn/9788131808146-L.jpg' },
        { title: 'Refrigeration & Air Conditioning', author: 'P.L. Ballaney', image: 'https://covers.openlibrary.org/b/isbn/9788174091390-L.jpg' },
        { title: 'Internal Combustion Engines', author: 'Mathur', image: 'https://covers.openlibrary.org/b/isbn/9788120330320-L.jpg' },
        { title: 'CAD/CAM', author: 'Groover', image: 'https://covers.openlibrary.org/b/isbn/9780131484191-L.jpg' },
        { title: 'Mechatronics', author: 'Bolton', image: 'https://covers.openlibrary.org/b/isbn/9780131216334-L.jpg' },
        { title: 'CNC Machines', author: 'Pabla', image: 'https://covers.openlibrary.org/b/isbn/9788122424461-L.jpg' }
    ],
    'mining': [
        { title: 'Mine Environment and Ventilation', author: 'G.B. Misra', image: 'https://covers.openlibrary.org/b/isbn/9780195616118-L.jpg' },
        { title: 'Mine Disasters and Mine Rescue', author: 'M.A. Ramulu', image: 'https://covers.openlibrary.org/b/isbn/9780873351935-L.jpg' },
        { title: 'Numerical Problems on Mine Ventilation', author: 'L.C. Kaku', image: 'https://covers.openlibrary.org/b/isbn/9788120417229-L.jpg' },
        { title: 'Elements of Mining Technology Vol.I', author: 'D.J. Deshmukh', image: 'https://covers.openlibrary.org/b/isbn/9788177001679-L.jpg' },
        { title: 'Elements of Mining Technology Vol.II', author: 'D.J. Deshmukh', image: 'https://covers.openlibrary.org/b/isbn/9788177001686-L.jpg' },
        { title: 'Elements of Mining Technology Vol.III', author: 'D.J. Deshmukh', image: 'https://covers.openlibrary.org/b/isbn/9788177001693-L.jpg' },
        { title: 'Modern Coal Mining Technology', author: 'S.K. Das', image: 'https://covers.openlibrary.org/b/isbn/9788120417229-L.jpg' },
        { title: 'Surface Mining Technology', author: 'S.K. Das', image: 'https://covers.openlibrary.org/b/isbn/9780873351034-L.jpg' },
        { title: 'Underground Winning of Coal', author: 'T.N. Singh', image: 'https://covers.openlibrary.org/b/isbn/9788120417229-L.jpg' },
        { title: 'Explosion & Blasting Practices in Mines', author: 'S.K. Das', image: 'https://covers.openlibrary.org/b/isbn/9780849389788-L.jpg' },
        { title: 'Mine Surveying & Levelling Vol.I', author: 'S. Ghatak', image: 'https://covers.openlibrary.org/b/isbn/9788186926055-L.jpg' },
        { title: 'Mine Surveying & Levelling Vol.II', author: 'S. Ghatak', image: 'https://covers.openlibrary.org/b/isbn/9788186926062-L.jpg' },
        { title: 'SME Mining Engineering Handbook', author: 'Howard L. Hartman', image: 'https://covers.openlibrary.org/b/isbn/9780873352642-L.jpg' },
        { title: 'Underground Mining Methods Handbook', author: 'W.A. Hustrulid', image: 'https://covers.openlibrary.org/b/isbn/9780873351935-L.jpg' },
        { title: 'Introductory Mining Engineering', author: 'Hartman', image: 'https://covers.openlibrary.org/b/isbn/9780471348511-L.jpg' }
    ]
};

// Initialize books in database
async function initializeBooks() {
    try {
        const existingBooks = await window.dbModule.dbGetAll('books');

        // Always initialize if no books exist
        if (existingBooks.length === 0) {
            console.log('No books found, initializing sample books...');

            let bookId = 1;

            for (const [department, books] of Object.entries(DEPARTMENT_BOOKS)) {
                for (const book of books) {
                    await window.dbModule.dbAdd('books', {
                        id: bookId++,
                        title: book.title,
                        author: book.author,
                        image: book.image,
                        department: department,
                        addedAt: new Date().toISOString()
                    });
                }
            }
            console.log('Books initialized in database with images');
        } else {
            console.log(`Found ${existingBooks.length} existing books in database`);
        }
    } catch (error) {
        console.error('Error initializing books:', error);
    }
}

// Get all books
async function getAllBooks() {
    try {
        return await window.dbModule.dbGetAll('books');
    } catch (error) {
        console.error('Error getting books:', error);
        return [];
    }
}

// Get books by department
async function getBooksByDepartment(department) {
    try {
        return await window.dbModule.dbGetByIndex('books', 'department', department);
    } catch (error) {
        console.error('Error getting books by department:', error);
        return [];
    }
}

// Get book by ID
async function getBookById(id) {
    try {
        return await window.dbModule.dbGet('books', id);
    } catch (error) {
        console.error('Error getting book:', error);
        return null;
    }
}

// Get borrowing history
async function getBorrowingHistory() {
    try {
        return await window.dbModule.dbGetAll('borrowingHistory');
    } catch (error) {
        console.error('Error getting borrowing history:', error);
        return [];
    }
}

// Get student's borrowing history
async function getStudentHistory(studentId) {
    try {
        return await window.dbModule.dbGetByIndex('borrowingHistory', 'studentId', studentId);
    } catch (error) {
        console.error('Error getting student history:', error);
        return [];
    }
}

// Check if book is currently borrowed
async function isBookBorrowed(bookId) {
    try {
        const history = await getBorrowingHistory();
        return history.some(record => record.bookId === bookId && record.status === 'active');
    } catch (error) {
        console.error('Error checking book status:', error);
        return false;
    }
}

// Get who borrowed the book
async function getBookBorrower(bookId) {
    try {
        const history = await getBorrowingHistory();
        const record = history.find(r => r.bookId === bookId && r.status === 'active');
        return record || null;
    } catch (error) {
        console.error('Error getting book borrower:', error);
        return null;
    }
}

// Calculate due date (15 days from borrow date)
function calculateDueDate(borrowDate) {
    const due = new Date(borrowDate);
    due.setDate(due.getDate() + BORROWING_DAYS);
    return due.toISOString();
}

// Check if book is overdue
function isOverdue(dueDate) {
    return new Date() > new Date(dueDate);
}

// Calculate days remaining or overdue
function getDaysStatus(dueDate) {
    const now = new Date();
    const due = new Date(dueDate);
    const diffTime = due - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
        return { overdue: true, days: Math.abs(diffDays) };
    }
    return { overdue: false, days: diffDays };
}

// Borrow a book
async function borrowBook(bookId, studentData) {
    try {
        const borrowed = await isBookBorrowed(bookId);
        if (borrowed) {
            return { success: false, message: 'This book is already borrowed by someone.' };
        }

        const book = await getBookById(bookId);
        if (!book) {
            return { success: false, message: 'Book not found.' };
        }

        const borrowDate = new Date().toISOString();
        const dueDate = calculateDueDate(borrowDate);

        const borrowRecord = {
            bookId: bookId,
            bookTitle: book.title,
            bookDepartment: book.department,
            studentId: studentData.studentId,
            studentName: studentData.name,
            studentEmail: studentData.email,
            studentDepartment: studentData.department,
            borrowDate: borrowDate,
            dueDate: dueDate,
            returnDate: null,
            status: 'active'
        };

        await window.dbModule.dbAdd('borrowingHistory', borrowRecord);

        return {
            success: true,
            message: `Book borrowed successfully! Due date: ${formatDate(dueDate)}`,
            dueDate: dueDate
        };
    } catch (error) {
        console.error('Error borrowing book:', error);
        return { success: false, message: 'Failed to borrow book. Please try again.' };
    }
}

// Return a book
async function returnBook(recordId) {
    try {
        const history = await getBorrowingHistory();
        const record = history.find(r => r.id === recordId);

        if (!record) {
            return { success: false, message: 'Record not found.' };
        }

        record.returnDate = new Date().toISOString();
        record.status = 'returned';

        await window.dbModule.dbPut('borrowingHistory', record);

        return { success: true, message: 'Book returned successfully!' };
    } catch (error) {
        console.error('Error returning book:', error);
        return { success: false, message: 'Failed to return book. Please try again.' };
    }
}

// Get currently borrowed books for a student
async function getStudentCurrentBooks(studentId) {
    try {
        const history = await getStudentHistory(studentId);
        return history.filter(record => record.status === 'active');
    } catch (error) {
        console.error('Error getting student current books:', error);
        return [];
    }
}

// Get all active borrowings
async function getAllActiveBorrowings() {
    try {
        const history = await getBorrowingHistory();
        return history.filter(record => record.status === 'active');
    } catch (error) {
        console.error('Error getting active borrowings:', error);
        return [];
    }
}

// Get student statistics
async function getStudentStats(studentId) {
    try {
        const history = await getStudentHistory(studentId);
        const totalBorrowed = history.length;
        const currentlyHolding = history.filter(r => r.status === 'active').length;
        const overdue = history.filter(r => r.status === 'active' && isOverdue(r.dueDate)).length;

        return {
            totalBorrowed,
            currentlyHolding,
            overdue
        };
    } catch (error) {
        console.error('Error getting student stats:', error);
        return { totalBorrowed: 0, currentlyHolding: 0, overdue: 0 };
    }
}

// Format date for display
function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

// Format time for display
function formatTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Format date and time
function formatDateTime(isoString) {
    return `${formatDate(isoString)} at ${formatTime(isoString)}`;
}

// Get department name
function getDepartmentName(departmentId) {
    const departments = getDepartments();
    const dept = departments.find(d => d.id === departmentId);
    return dept ? dept.name : departmentId;
}
