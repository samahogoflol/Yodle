import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import VerifyEmailModal from './components/VerifyEmailModal';

type TStage = 'FORM' | 'VERIFICATION' | 'WAITING';

const RegisterPage = () => {
    const [stage, setStage] = useState<TStage>('FORM');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleRegisterSuccess = (userEmail: string) => {
        setEmail(userEmail);
        setStage('VERIFICATION');
    };

    const handleVerifySuccess = () => {
        setStage('WAITING');
    };

    return (
        <div className="container mx-auto">
            {stage === 'FORM' && (
                <RegisterForm 
                    onSuccess={handleRegisterSuccess} 
                />
            )}

            {stage === 'VERIFICATION' && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                        <VerifyEmailModal 
                            email={email} 
                            onSuccess={handleVerifySuccess} 
                        />
                    </div>
                </div>
            )}

            {stage === 'WAITING' && (
                <div className="text-center mt-20">
                    <h2 className="text-2xl font-bold text-green-600 mb-4">
                        Реєстрація пройшла успішно! 🎉
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Ваш акаунт створено. Очікуйте на підтвердження адміністратором (до 24 годин).
                    </p>
                    <button 
                        onClick={() => void navigate('/login')}
                        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
                    >
                        Увійти в кабінет
                    </button>
                </div>
            )}
        </div>
    );
};

export default RegisterPage;