// ===== Books Module =====

// Borrowing period in days
const BORROWING_DAYS = 15;

// Books data organized by department (from Excel file LIB-25.xlsx)
const DEPARTMENT_BOOKS = {
    'computer-science': [
        { title: "Programming With 'C'", author: 'Gottfried', image: 'https://picsum.photos/seed/progc/120/180' },
        { title: 'Fundamentals of Computers', author: 'V. Rajaraman', image: 'https://picsum.photos/seed/fundcomp/120/180' },
        { title: 'IBM PC & Clones', author: 'Govindarajulu', image: 'https://picsum.photos/seed/ibmpc/120/180' },
        { title: 'Introduction to Computers', author: 'Subramanyan', image: 'https://picsum.photos/seed/introcomp/120/180' },
        { title: 'Digital Electronics & Introduction to Microprocessor', author: 'Kamat', image: 'https://picsum.photos/seed/digital/120/180' },
        { title: 'Digital Fundamentals', author: 'Floyd', image: 'https://picsum.photos/seed/digfund/120/180' },
        { title: 'Digital Principles & Applications', author: 'Malvino', image: 'https://picsum.photos/seed/digprin/120/180' },
        { title: 'Microprocessors', author: 'Gaonkar', image: 'https://picsum.photos/seed/micro/120/180' },
        { title: 'Computer Organisation & Architecture', author: 'Stallings', image: 'https://picsum.photos/seed/comporg/120/180' },
        { title: 'Java Programming Language', author: 'Arnold', image: 'https://picsum.photos/seed/java/120/180' },
        { title: 'Computer Networks', author: 'Tanenbaum', image: 'https://picsum.photos/seed/networks/120/180' },
        { title: 'Operating Systems Concepts', author: 'Galvin', image: 'https://picsum.photos/seed/os/120/180' },
        { title: 'Database System Concepts', author: 'Korth', image: 'https://picsum.photos/seed/database/120/180' },
        { title: 'Let Us C', author: 'Kanetkar', image: 'https://picsum.photos/seed/letusc/120/180' },
        { title: 'Data Structures Using C', author: 'Tanenbaum', image: 'https://picsum.photos/seed/datastruct/120/180' }
    ],
    'mechanical': [
        { title: 'Thermal Engineering in SI Units', author: 'P.L. Ballaney', image: 'https://picsum.photos/seed/thermal/120/180' },
        { title: 'A Textbook of Mechanical Technology', author: 'R.S. Khurmi', image: 'https://picsum.photos/seed/mechtech/120/180' },
        { title: 'Theory of Machines', author: 'R.S. Khurmi & J.K. Gupta', image: 'https://picsum.photos/seed/theoryma/120/180' },
        { title: 'Production Technology', author: 'R.K. Jain', image: 'https://picsum.photos/seed/prodtech/120/180' },
        { title: 'Engineering Drawing Vol.I', author: 'K.R. Gopalakrishna', image: 'https://picsum.photos/seed/engdraw/120/180' },
        { title: 'A Textbook of Hydraulics & Fluid Mechanics', author: 'R.S. Khurmi', image: 'https://picsum.photos/seed/hydraul/120/180' },
        { title: 'Workshop Technology Vol.I', author: 'Hajra Choudhury', image: 'https://picsum.photos/seed/workshop1/120/180' },
        { title: 'Workshop Technology Vol.II', author: 'Hajra Choudhury', image: 'https://picsum.photos/seed/workshop2/120/180' },
        { title: 'Machine Design', author: 'R.S. Khurmi', image: 'https://picsum.photos/seed/machdes/120/180' },
        { title: 'Strength of Materials', author: 'R.K. Bansal', image: 'https://picsum.photos/seed/strength/120/180' },
        { title: 'Refrigeration & Air Conditioning', author: 'P.L. Ballaney', image: 'https://picsum.photos/seed/refrig/120/180' },
        { title: 'Internal Combustion Engines', author: 'Mathur', image: 'https://picsum.photos/seed/ice/120/180' },
        { title: 'CAD/CAM', author: 'Groover', image: 'https://picsum.photos/seed/cadcam/120/180' },
        { title: 'Mechatronics', author: 'Bolton', image: 'https://picsum.photos/seed/mechatron/120/180' },
        { title: 'CNC Machines', author: 'Pabla', image: 'https://picsum.photos/seed/cnc/120/180' }
    ],
    'mining': [
        { title: 'Mine Environment and Ventilation', author: 'G.B. Misra', image: 'https://picsum.photos/seed/mineenv/120/180' },
        { title: 'Mine Disasters and Mine Rescue', author: 'M.A. Ramulu', image: 'https://picsum.photos/seed/minedis/120/180' },
        { title: 'Numerical Problems on Mine Ventilation', author: 'L.C. Kaku', image: 'https://picsum.photos/seed/minevent/120/180' },
        { title: 'Elements of Mining Technology Vol.I', author: 'D.J. Deshmukh', image: 'https://picsum.photos/seed/minetech1/120/180' },
        { title: 'Elements of Mining Technology Vol.II', author: 'D.J. Deshmukh', image: 'https://picsum.photos/seed/minetech2/120/180' },
        { title: 'Elements of Mining Technology Vol.III', author: 'D.J. Deshmukh', image: 'https://picsum.photos/seed/minetech3/120/180' },
        { title: 'Modern Coal Mining Technology', author: 'S.K. Das', image: 'https://picsum.photos/seed/coalmine/120/180' },
        { title: 'Surface Mining Technology', author: 'S.K. Das', image: 'https://picsum.photos/seed/surface/120/180' },
        { title: 'Underground Winning of Coal', author: 'T.N. Singh', image: 'https://picsum.photos/seed/undergr/120/180' },
        { title: 'Explosion & Blasting Practices in Mines', author: 'S.K. Das', image: 'https://picsum.photos/seed/blasting/120/180' },
        { title: 'Mine Surveying & Levelling Vol.I', author: 'S. Ghatak', image: 'https://picsum.photos/seed/survey1/120/180' },
        { title: 'Mine Surveying & Levelling Vol.II', author: 'S. Ghatak', image: 'https://picsum.photos/seed/survey2/120/180' },
        { title: 'SME Mining Engineering Handbook', author: 'Howard L. Hartman', image: 'https://picsum.photos/seed/sme/120/180' },
        { title: 'Underground Mining Methods Handbook', author: 'W.A. Hustrulid', image: 'https://picsum.photos/seed/undermin/120/180' },
        { title: 'Introductory Mining Engineering', author: 'Hartman', image: 'https://picsum.photos/seed/intromine/120/180' }
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
