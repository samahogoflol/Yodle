import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose'; 
import jwt from 'jsonwebtoken'
import Instructor from './models/Instructor.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Успішно підключено до MongoDB Atlas'))
    .catch((err) => console.error('Помилка підключення до бази:', err));

const PORT = process.env.PORT || 5101;
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT} 🚀`);
});

app.post('/api/auth/register', async (req, res) => {
    try {
        const { name, email, password, typeOfSport, location } = req.body;
        const newInstructor = new Instructor({
            name,
            email,
            password, 
            typeOfSport,
            location
        });

        await newInstructor.save();

        res.status(201).json({ message: "Інструктор успішно зареєстрований! " });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Помилка при реєстрації ", error: error.message });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Шукаємо інструктора за email
        const instructor = await Instructor.findOne({ email });
        if (!instructor) {
            return res.status(401).json({ message: "Невірний email або пароль ❌" });
        }

        // 2. Перевіряємо пароль за допомогою нашого методу comparePassword
        const isMatch = await instructor.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Невірний email або пароль ❌" });
        }

        // 3. Створюємо токен (цифровий паспорт)
        const token = jwt.sign(
            { id: instructor._id, role: instructor.role },
            process.env.JWT_SECRET, // Секретний ключ з .env
            { expiresIn: '30d' }    // Токен діятиме 30 днів
        );

        res.json({
            message: "Вхід успішний! ✅",
            token,
            instructor: {
                id: instructor._id,
                name: instructor.name,
                email: instructor.email
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Помилка сервера ❌", error: error.message });
    }
});