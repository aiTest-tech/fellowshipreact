// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ProfileCard from '../../components/ProfileCard';
import { useSelector } from 'react-redux';

const MeetOurFellows = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [selectedFellow, setSelectedFellow] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const language = useSelector((state: RootState) => state.language.language);

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

    const initialData = [
        {
            id: 1,
            deptAllocated: "Health and Family Welfare",
            fullName: "Mr. Aaron Rajesh Christian",
            age: 28,
            postGraduation: "MBA",
            pgUniversity: "IIT Madras",
            bachelorsDegree: "B.Com",
            ugUniversity: "Ahmedabad University",
            linkedinUrl: "https://www.linkedin.com/in/aaronch687/",
            imgUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHbrvGjj1_SzQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710917912446?e=1738800000&v=beta&t=PXurdVuHHjsMlSdoA1pOyR_5-nCd5d_gzTGytqCU0J0",
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQHuGwlmqogBQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707743055900?e=1738800000&v=beta&t=GXyrmWR2iVrFMgKW3SF_yUQnNOsyyxJOspm--j3Z-ko"
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQHIxDkjTEq9bg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697092650908?e=1738800000&v=beta&t=xZFv9o5P0QmHrBxCGAgVaztP74OCkSHIS7phV2Mn9QA"
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
            "imgUrl": "https://media.licdn.com/dms/image/sync/v2/D4E27AQH7o5-U3G64Lg/articleshare-shrink_800/articleshare-shrink_800/0/1715815056733?e=1734015600&v=beta&t=KjbzPDtKIyuXQd-0TINb82kWXekFF5H2mIpNKhyArqo"
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQFfoRJ7n2arGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709878850672?e=1738800000&v=beta&t=SIWRy7pQQ4PUzU3q6Jfg597sd_sSDvVD8UT3Agr9lqs"
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/C5603AQHOQqJKjLrBng/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1588234424055?e=1738800000&v=beta&t=dKvEBTTPQwFuPckt2jyPMM3r4HcVBDBwGaXQ-JW1C4Q"
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
            "linkedinUrl": "https://www.linkedin.com/in/kapil-dayma/",
            "imgUrl": "https://media.licdn.com/dms/image/v2/C5603AQGy2DWCkrqUCg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1522288707754?e=1738800000&v=beta&t=tuxRKC8o6Yypa3iskJhYIhIr9oLSStHPVR8gR8lGBRQ"
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4E03AQEFkT-hhdOS5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720802257473?e=1738800000&v=beta&t=8vptr48_ZUhUnn-YB6eIWYet3Ee57lyLoJFPbeCOwQk"
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQFvCsqaWM21nQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691348366603?e=1738800000&v=beta&t=oI4a3kV12VBRc1ipnByg6tTHEYT4wpSMIpUxiSppCQ0"
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/C5603AQFnAASMRSxqLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1559888901064?e=1738800000&v=beta&t=hWUL8mcVzMLDB6vpwuc575oQZCs9Nt2ihHgXzNQnqUg"
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQGFiVLVJE27Qw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689939064249?e=1738800000&v=beta&t=K4NLNPkAr8wyFW69Zeyn5xPqV50Ix7MFYrhqzLmyQ-s"
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/C5103AQH0XuAdWMxb8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1558092310727?e=1738800000&v=beta&t=Xzy5JFotYyEeOBnDouScJ6N3L_DbEn7ll9OgBFyw0kA"
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/D4D03AQG3-Q0b2P42eQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682439173222?e=1738800000&v=beta&t=OM65cGU-yQUWpRBX7fbKT0vVv5Q22X9C-Zxttn_GSA4"
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/D5603AQFyj_2tEXzbsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713603615326?e=1738800000&v=beta&t=kfuL0p3WfsLtAvXP4Qr1Y9sUFtUrD5vi1Le8MVi393Y"
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
            "imgUrl": "https://media.licdn.com/dms/image/v2/D5603AQEeBZDL_7lQ6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730363825367?e=1738800000&v=beta&t=pjFnkutdhdeXIwAeWDaJUAAAfuFM4HrbcQ3buVsh0sw"
        }
    ];

    const handleCardClick = (fellow) => {
        setSelectedFellow(fellow);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
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
            <main className="relative mt-[140px]">
                <div className="flex justify-center items-center container my-3 bg-[url('assets/img/illusion.png')] w-[100vw]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                        {initialData.map((fellow) => (
                            <ProfileCard
                                key={fellow.id}
                                name={fellow.fullName}
                                department={fellow.deptAllocated}
                                linkedinUrl={fellow.linkedinUrl}
                                imageUrl={fellow.imgUrl}
                                onClick={() => handleCardClick(fellow)}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />

            {showPopup && selectedFellow && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={closePopup}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedFellow.imgUrl}
                            alt={selectedFellow.fullName}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">{selectedFellow.fullName}</h3>
                        <p>{selectedFellow.deptAllocated}</p>
                        <a
                            href={selectedFellow.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline mt-4 block"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default MeetOurFellows;
