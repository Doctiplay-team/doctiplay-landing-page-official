import React from 'react';
import { X, Rocket, Bell } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenContact: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose, onOpenContact }) => {
    const { t } = useLanguage();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,216,255,0.1)] animate-fade-in-up overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

                <div className="flex flex-col items-center text-center relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 shadow-[0_0_30px_rgba(0,216,255,0.2)]">
                        <Rocket className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="text-2xl font-display font-black text-white mb-2 uppercase tracking-wide">
                        {t.navbar.beta} v1.0
                    </h3>

                    <p className="text-slate-400 font-medium mb-8">
                        La démo interactice complète sera disponible très prochainement.
                    </p>

                    <button
                        onClick={onOpenContact}
                        className="w-full py-3 bg-white text-slate-950 rounded-xl font-display font-bold text-sm uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2"
                    >
                        <Bell className="w-4 h-4" />
                        M'avertir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonModal;
