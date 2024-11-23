import React from 'react';
import { Shield, Swords, Heart } from 'lucide-react';

interface RoleFilterProps {
  selectedRole: string | null;
  onRoleSelect: (role: string | null) => void;
}

export function RoleFilter({ selectedRole, onRoleSelect }: RoleFilterProps) {
  const roles = [
    { name: 'Tank', icon: Shield },
    { name: 'Damage', icon: Swords },
    { name: 'Support', icon: Heart },
  ];

  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => onRoleSelect(null)}
        className={`px-4 py-2 rounded-lg transition-all ${
          selectedRole === null
            ? 'bg-gray-800 text-white'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        }`}
      >
        All
      </button>
      {roles.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => onRoleSelect(name)}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
            selectedRole === name
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          <Icon className="w-4 h-4" />
          {name}
        </button>
      ))}
    </div>
  );
}