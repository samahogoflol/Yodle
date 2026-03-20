import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface BurgerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-10 mt-13.5 ">
            <div 
                className="absolute inset-[1px] bg-black/30 backdrop-blur-md transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />
            <nav 
                className="relative w-full h-auto bg-white shadow-2xl flex flex-col animate-slide-in"
                onClick={(e) => e.stopPropagation()}
            >
                <ul className="flex flex-col pl-4 w-fit mt-5 mb-10.5 gap-6">
                    <li className="flex">
                        <Link 
                            to="/#our-instructors" 
                            onClick={onClose}
                            className="text-lg font-medium text-gray-800 border-b border-black leading-none pb-0 hover:text-primary-orange transition-colors inline-block"
                        >
                            Our instructors
                        </Link>
                    </li>
                    <li className="flex">
                        <Link 
                            to="/#how-to-book"
                            onClick={onClose}
                            className="text-lg font-medium text-gray-800 border-b border-black leading-none pb-0 hover:text-primary-orange transition-colors inline-block"
                        >
                            How to book
                        </Link>
                    </li>
                    <li className="flex">
                        <Link 
                            to="/#partners" 
                            onClick={onClose}
                            className="text-lg font-medium text-gray-800 border-b border-black leading-none pb-0 hover:text-primary-orange transition-colors inline-block"
                        >
                            Partners
                        </Link>
                    </li>
                    <li className="flex">
                        <Link 
                            to="/#reviews" 
                            onClick={onClose}
                            className="text-lg font-medium text-gray-800 border-b border-black leading-none pb-0 hover:text-primary-orange transition-colors inline-block"
                        >
                            Reviews
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};