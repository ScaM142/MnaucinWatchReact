// src/components/LoginModal.tsx
import React, { useState } from 'react';
import { hashPassword } from '../utils/auth';

interface LoginModalProps {
  onLogin: (hashedPassword: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const hashedPassword = await hashPassword(password);
      
      onLogin(hashedPassword);
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
      setPassword('');
      console.groupEnd();
    }
  };

  const handleButtonClick = async () => {
    console.log('Button clicked directly');
    await handleSubmit(new Event('submit') as any);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form 
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full"
      >
        <h2 className="text-2xl text-white mb-4">Skibidi</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          placeholder="Password"
          autoComplete="current-password"
          disabled={isLoading}
        />
        <button
          type="submit"
          onClick={handleButtonClick}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={isLoading || !password}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};