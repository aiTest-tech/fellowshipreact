import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // ag-Grid styles
import 'ag-grid-community/styles/ag-theme-alpine.css'; // ag-Grid theme styles
import Footer from '../../components/Footer/Footer';
import ProfileCard from '../../components/ProfileCard';


// const fellows = [
//     {
//         id: 1,
//         name: 'Rahul Sharma',
//         image: 'assets/img/profile/placeholder.jpg',
//         bio: 'Tech innovator with 5 years of experience in AI and machine learning.'
//     },
//     {
//         id: 2,
//         name: 'Priya Patel',
//         image: 'assets/img/profile/placeholder.jpg',
//         bio: 'Social entrepreneur focusing on sustainable development initiatives.'
//     },
//     // Add more fellows as needed
// ];


const FellowCard = ({ fellow }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <img
                    src={fellow.image}
                    alt={fellow.name}
                    className="w-full h-[400px] object-cover transition-transform duration-300 ease-in-out"
                />

                <div
                    className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center 
                        transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="text-center p-6 text-white">
                        <h3 className="text-2xl font-bold mb-3">{fellow.name}</h3>
                        <p className="text-base">{fellow.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MeetOurFellows = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    // Update scroll progress
    const updateScrollProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        const progress = (scrollPosition / scrollHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress);
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    // TableRow interface for type safety
    interface TableRow {
        id: number;
        deptAllocated: string;
        fullName: string;
        age: number;
        postGraduation: string;
        pgUniversity: string;
        bachelorsDegree: string;
        ugUniversity: string;
        linkedinUrl: string;
        imgUrl: string;

    }

    // Sample data
    const initialData: TableRow[] = [
        {
            "id": 1,
            "deptAllocated": "Health and Family Welfare ",
            "fullName": "Mr. Aaron Rajesh Christian",
            "age": 28,
            "postGraduation": "MBA",
            "pgUniversity": "IIT Madras",
            "bachelorsDegree": "B.Com",
            "ugUniversity": "Ahmedabad University",
            "linkedinUrl": "https://www.linkedin.com/in/aaronch687/",
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQHbrvGjj1_SzQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710917912446?e=2147483647&v=beta&t=YAQXrRCR7uFVV_-YmkHoxPvNNTbzwCszGH8LWAAYqcE"
        },
        {
            "id": 2,
            "deptAllocated": "Sports, Youth and Cultural Activities ",
            "fullName": "Ms. Abhilasha Solanki",
            "age": 31,
            "postGraduation": "MBA Marketing",
            "pgUniversity": "N.R. Institute of Business Management,GLS Univeris",
            "bachelorsDegree": "BE Computer",
            "ugUniversity": "Silver Oak College of Engineering and Technology",
            "linkedinUrl": "",
            "imgUrl": "assets/img/profile/placeholder.jpg"
        },
        {
            "id": 3,
            "deptAllocated": "Education Department (Primary & Secondary Education - improvement in enrollment of secondary & higher secondary school students)",
            "fullName": "Mr. Aman Arun Kumar Anand",
            "age": 33,
            "postGraduation": "Masters of Arts",
            "pgUniversity": "Tata Institute of Social Sciences Mumbai",
            "bachelorsDegree": "B.Tech",
            "ugUniversity": "Kalinga Institute of Industrial Technology ",
            "linkedinUrl": "https://www.linkedin.com/in/aman-anand-199b179a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            "imgUrl": "assets/img/profile/placeholder.jpg"
        },
        {
            "id": 4,
            "deptAllocated": "ICDS - Women & Child Development ",
            "fullName": "Ms. Apoorvi Garg",
            "age": 31,
            "postGraduation": "PGDM",
            "pgUniversity": "Entrepreneurship Development Institute of India",
            "bachelorsDegree": "BBA",
            "ugUniversity": "Ahmedabad University",
            "linkedinUrl": "http://linkedin.com/in/apoorvigarg26",
            "imgUrl": "assets/img/profile/placeholder.jpg"
        },
        {
            "id": 5,
            "deptAllocated": "ICDS (Primary Education Nodal), Women & Child Development",
            "fullName": "Mr. Ashutosh Ramesh Jalan",
            "age": 28,
            "postGraduation": "MTech Part of Integrated Dual Degree program",
            "pgUniversity": "IIT-BHU Varanasi",
            "bachelorsDegree": "B.Tech",
            "ugUniversity": "IIT BHU Varanasi",
            "linkedinUrl": "http://www.linkedin.com/in/ashutoshjalan",
            "imgUrl": "https://media.licdn.com/dms/image/v2/D5603AQFTmJX8NKdjTw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719082984939?e=1738800000&v=beta&t=J0X3tJ44Z_vLUNFOkeTC3_QSe1E-kMjnUsd3lPLgObU"
        },
        {
            "id": 6,
            "deptAllocated": "Forest & Environment",
            "fullName": "Mr. Bhavdeep Keshavlal Nakum",
            "age": 33,
            "postGraduation": "M.TECH Mechanical Engineering",
            "pgUniversity": "IIT-RAM",
            "bachelorsDegree": "B.E. Mechanical ",
            "ugUniversity": "Gujarat Technological University",
            "linkedinUrl": "https://www.linkedin.com/in/bhavdeep-nakum-7831b859?trk=contact-info",
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQFfoRJ7n2arGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709878850672?e=1738800000&v=beta&t=BezLR2JIFxi_jW6rc8wl33PJoO9BDeOYOqSLDVDlb-8"
        },
        {
            "id": 7,
            "deptAllocated": "Commissionerate of Rural Development",
            "fullName": "Mr. Jatan S Bhanvadiya",
            "age": 29,
            "postGraduation": "M.A in Political Science",
            "pgUniversity": "University of Delhi",
            "bachelorsDegree": "B.A Hons in Political Science",
            "ugUniversity": "The Maharaja Sayajirao University of Baroda",
            "linkedinUrl": "https://www.linkedin.com/in/jatan-bhanvadiya-a596991a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            "imgUrl": "https://media.licdn.com/dms/image/v2/C5603AQHOQqJKjLrBng/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1588234424032?e=1738800000&v=beta&t=knkF10YHgKrE7r5q_FcSe2r1jEEmnaMWp_TRXTxK694"
        },
        {
            "id": 8,
            "deptAllocated": "Planning Division- GAD",
            "fullName": "Mr. Kapil Kantibhai Dayma",
            "age": 30,
            "postGraduation": "M.Tech Industrial Engineering",
            "pgUniversity": "Indian Institute of Technology, Kanpur",
            "bachelorsDegree": "B.E. Mechanical ",
            "ugUniversity": "Gujarat Technological University",
            "linkedinUrl": "https://www.linkedin.com/in/dr-kuldeep-malam-3757aa13b",
            "imgUrl": "https://media.licdn.com/dms/image/v2/C5603AQGy2DWCkrqUCg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1522288707951?e=2147483647&v=beta&t=KsorsbZ56Wzw8Lal8vFIbJhIZ4eWVsaIgHC7qvdWMvk"
        },
        {
            "id": 9,
            "deptAllocated": "Agriculture ",
            "fullName": "Dr. Kuldeep Vaidebhai Malam",
            "age": 28,
            "postGraduation": "M.Sc. Agriculture Agronomy",
            "pgUniversity": "Junagadh Agricultural University",
            "bachelorsDegree": "B.Sc. Hons. Agriculture",
            "ugUniversity": "Junagadh Agricultural University",
            "linkedinUrl": "https://www.linkedin.com/in/dr-kuldeep-malam-3757aa13b",
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4E03AQEFkT-hhdOS5Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720802257491?e=1738800000&v=beta&t=fFXYqk0ViACGtzQRD6lq5xTbZranpUCHNnPEe7X3Td0"
        },
        {
            "id": 10,
            "deptAllocated": "Chief Minister's Office",
            "fullName": "Mr. Kunal  Apastamb",
            "age": 25,
            "postGraduation": "MSc Behavioural and Economic Science",
            "pgUniversity": "University of Warwick United Kingdom",
            "bachelorsDegree": "BSc Economics Honours",
            "ugUniversity": "Symbiosis School of Economics",
            "linkedinUrl": "https://www.linkedin.com/in/kunalha/",
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQFvCsqaWM21nQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691348366602?e=1738800000&v=beta&t=yvp0Ea2zR6M8CkpeX6Fi6dN6E0FdFg1JJEv4Sa_6o6E"
        },
        {
            "id": 11,
            "deptAllocated": "Irrigation ",
            "fullName": "Ms. Rupal Harishchandra Budhbhatti",
            "age": 32,
            "postGraduation": "Water Resources Management",
            "pgUniversity": "Gujarat Technological University",
            "bachelorsDegree": "B.E Civil ",
            "ugUniversity": "Gujarat Technological University",
            "linkedinUrl": "https://www.linkedin.com/in/rupal-budhbhatti-003a7b72?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            "imgUrl": "assets/img/profile/placeholder.jpg"
        },
        {
            "id": 12,
            "deptAllocated": "Urban Development & Housing",
            "fullName": "Ms. Saumya Mukesh Lathia",
            "age": 30,
            "postGraduation": "Master of Planning MPL",
            "pgUniversity": "University of Southern California USC",
            "bachelorsDegree": "Bachelor of Planning ",
            "ugUniversity": "CEPT University, Ahmedabad",
            "linkedinUrl": "https://www.linkedin.com/in/saumya-lathia-24883891",
            "imgUrl": "assets/img/profile/placeholder.jpg"
        },
        {
            "id": 13,
            "deptAllocated": "Tribal Development ",
            "fullName": "Ms. Shruti Ajay Kumar Singh",
            "age": 29,
            "postGraduation": "MSc Water Science and Policy",
            "pgUniversity": "SHIV NADAR UNIVERSITY",
            "bachelorsDegree": "BSc Agriculture",
            "ugUniversity": "SRI DEV SUMAN",
            "linkedinUrl": "https://www.linkedin.com/in/shruti-singh-80b5a5168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            "imgUrl": "assets/img/profile/placeholder.jpg"
        },
        {
            "id": 14,
            "deptAllocated": "Sardar Patel Institute of Public Administration (SPIPA)",
            "fullName": "Mr. Tushar  Meshram",
            "age": 36,
            "postGraduation": "MA Society and Culture",
            "pgUniversity": "IIT Gandhinagar",
            "bachelorsDegree": "BA Journalism",
            "ugUniversity": "Bangalore University",
            "linkedinUrl": "https://www.linkedin.com/in/tusharmeshram88",
            "imgUrl": "https://media.licdn.com/dms/image/v2/C5103AQH0XuAdWMxb8A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1558092310903?e=1738800000&v=beta&t=wnb-JOomqhPlfWaNZEn21tCoyODE91dQvcWsSJlxEwo"
        },
        {
            "id": 15,
            "deptAllocated": "Energy & Petrochemical ",
            "fullName": "Mr. Ajaj Sheikh ",
            "age": 27,
            "postGraduation": "ME Electrical",
            "pgUniversity": "Gujarat Technological University",
            "bachelorsDegree": "B.Tech Electrical",
            "ugUniversity": "Gujarat Technological University",
            "linkedinUrl": "https://www.linkedin.com/in/ajaj-shaikh-246231134",
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQG3-Q0b2P42eQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1682439173222?e=1738800000&v=beta&t=X8VP9iwWR4BAyAXPuK2QjXHclDRWJCoPubK3U8vS5-w"
        },
        {
            "id": 16,
            "deptAllocated": "Labour and Employment ",
            "fullName": "Mr. Deep Patel",
            "age": 35,
            "postGraduation": "ME Computer Science",
            "pgUniversity": "Gujarat Technological University",
            "bachelorsDegree": "BE Computer",
            "ugUniversity": "Gujarat Technological University",
            "linkedinUrl": "https://in.linkedin.com/in/deep-patel-66410636",
            "imgUrl": "https://media.licdn.com/dms/image/v2/D5603AQFyj_2tEXzbsg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713603615326?e=1738800000&v=beta&t=DmE9FLFI1W0H6gXJoxkOircRUI7Qs0JpkhwUbtUZ59Y"
        },
        {
            "id": 17,
            "deptAllocated": "Urban Development Department- Swachh Bharat Mission",
            "fullName": "Mr.Parag Patel",
            "age": 33,
            "postGraduation": "M.Pharm",
            "pgUniversity": "Institute of Life Sciences, Ahmedabad",
            "bachelorsDegree": "B.Pharm",
            "ugUniversity": "N M Padaliya Pharmacy College",
            "linkedinUrl": "https://www.linkedin.com/in/parag-patel-64228529?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            "imgUrl": "https://media.licdn.com/dms/image/v2/D5603AQEeBZDL_7lQ6w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730363825365?e=1738800000&v=beta&t=HpfKFisgjpF1Yso0R9c8LsRsXa1Ery6WrlXO9Zx_ugU"
        }
    ];

    // Column definitions for ag-Grid
    const columns = [
        { headerName: 'ID', field: 'id', sortable: true, filter: true },
        { headerName: 'Dept Allocated', field: 'deptAllocated', sortable: true, filter: true },
        { headerName: 'Name', field: 'fullName', sortable: true, filter: true },
        { headerName: 'Age', field: 'age', sortable: true, filter: true },
        { headerName: 'Post Graduation', field: 'postGraduation', sortable: true, filter: true },
        { headerName: 'PG University', field: 'pgUniversity', sortable: true, filter: true },
        { headerName: 'Bachelors Degree', field: 'bachelorsDegree', sortable: true, filter: true },
        { headerName: 'UG University', field: 'ugUniversity', sortable: true, filter: true },
        { headerName: 'linkedinUrl', field: 'linkedinUrl', sortable: true, filter: true },
        { headerName: 'imgUrl', field: 'imgUrl', sortable: true, filter: true },
    ];

    // Grid options for ag-Grid
    const gridOptions = {
        paginationPageSize: 10,
        pagination: true,
    };

    return (
        <>
            <div className="w-full fixed top-0 left-0 z-50">
                <Navbar />
            </div>
            <div
                style={{ width: `${scrollProgress}%` }}
                className="fixed top-0 left-0 h-1 bg-orange-500 transition-all duration-200 ease-in-out z-50"
            ></div>
            <div className="relative mt-[140px] max-w-md:mt-12 font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img
                    src="https://cmogujarat.gov.in/sites/default/files/2024-08/cm-fellowship.jpg"
                    alt="Banner Image"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="min-h-[350px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-gray-200">Meet Our Fellows</h2>
                </div>
            </div>
            <main className="fix">


                <div className="flex justify-center items-center container my-3 bg-[url('assets/img/illusion.png')] w-[100vw]">
                    {/* Grid Layout for Profile Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                        {
                            initialData.map((item, index) => (
                                <>
                                    <ProfileCard
                                        name={item.fullName}
                                        department={item.deptAllocated}
                                        linkedinUrl={item.linkedinUrl}
                                        imageUrl={item.imgUrl}
                                    />
                                </>
                            ))
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default MeetOurFellows;
