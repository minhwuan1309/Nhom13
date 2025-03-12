const myProfile = {
    name: "Lê Anh Đại",
    age: 22,
    profession: "Lập trình viên Backend",
    skills: ["JavaScript", "ReactJS", "Node.js", "PHP", "MySQL", "Spring Boot"],
    interests: ["Lập trình", "Công nghệ", "Âm nhạc", "Thể thao", "Đọc sách"],
    contact: {
        email: "leanhdai@example.com",
        github: "https://github.com/leanhdai",
        linkedin: "https://linkedin.com/in/leanhdai"
    },
    introduce: function() {
        console.log(`Xin chào! Tôi là ${this.name}. Tôi là một ${this.profession}.`);
        console.log(`Tôi có kinh nghiệm với các công nghệ: ${this.skills.join(", ")}.`);
        console.log(`Sở thích của tôi là: ${this.interests.join(", ")}.`);
        console.log(`Liên hệ với tôi qua email: ${this.contact.email}`);
    }
};

// Gọi hàm giới thiệu bản thân
myProfile.introduce();