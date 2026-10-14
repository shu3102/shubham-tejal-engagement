import React from 'react';

/**
 * Traditional Maharashtrian Mangal Kalash with coconut and mango leaves.
 */
export const MangalKalashMotif: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Coconut & Mango Leaves */}
    <path
      d="M50 8C43 18 36 24 30 26C38 31 44 32 50 32C56 32 62 31 70 26C64 24 57 18 50 8Z"
      fill="#B08D57"
      stroke="#701F2B"
      strokeWidth="1.5"
    />
    <path
      d="M32 25C22 18 16 12 14 5C22 10 30 16 34 23"
      stroke="#B08D57"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M68 25C78 18 84 12 86 5C78 10 70 16 66 23"
      stroke="#B08D57"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Coconut Dome */}
    <circle cx="50" cy="24" r="11" fill="#826437" stroke="#B08D57" strokeWidth="1.5" />
    <circle cx="48" cy="21" r="1.5" fill="#B08D57" />
    <circle cx="52" cy="21" r="1.5" fill="#B08D57" />
    <circle cx="50" cy="26" r="1.5" fill="#B08D57" />
    {/* Kalash Neck */}
    <path
      d="M36 33C36 31 64 31 64 33C64 37 60 41 50 41C40 41 36 37 36 33Z"
      fill="#D4B886"
      stroke="#701F2B"
      strokeWidth="1.5"
    />
    {/* Kalash Body */}
    <path
      d="M34 38C26 46 22 56 22 68C22 79 32 87 50 87C68 87 78 79 78 68C78 56 74 46 66 38C60 42 40 42 34 38Z"
      fill="#B08D57"
      stroke="#701F2B"
      strokeWidth="2"
    />
    {/* Swastik / Auspicious Gold Mark on Kalash */}
    <path
      d="M50 52V68M42 60H58M42 52H50M50 68H58M42 68V60M58 52V60"
      stroke="#701F2B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Base Stand */}
    <path
      d="M35 87H65C63 92 59 95 50 95C41 95 37 92 35 87Z"
      fill="#701F2B"
      stroke="#B08D57"
      strokeWidth="1.5"
    />
  </svg>
);

/**
 * Traditional Royal Lotus Motif.
 */
export const LotusMotif: React.FC<{ size?: number; className?: string }> = ({
  size = 36,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Center Petal */}
    <path
      d="M40 8C33 22 35 38 40 48C45 38 47 22 40 8Z"
      fill="#B08D57"
      stroke="#701F2B"
      strokeWidth="1.5"
    />
    {/* Inner Left Petal */}
    <path
      d="M37 20C26 28 24 40 33 48C37 40 38 30 37 20Z"
      fill="#D4B886"
      stroke="#701F2B"
      strokeWidth="1.2"
    />
    {/* Inner Right Petal */}
    <path
      d="M43 20C54 28 56 40 47 48C43 40 42 30 43 20Z"
      fill="#D4B886"
      stroke="#701F2B"
      strokeWidth="1.2"
    />
    {/* Outer Left Petal */}
    <path
      d="M30 30C15 36 12 45 24 51C30 45 32 38 30 30Z"
      fill="#B08D57"
      stroke="#701F2B"
      strokeWidth="1.2"
    />
    {/* Outer Right Petal */}
    <path
      d="M50 30C65 36 68 45 56 51C50 45 48 38 50 30Z"
      fill="#B08D57"
      stroke="#701F2B"
      strokeWidth="1.2"
    />
    {/* Base Leaves */}
    <path
      d="M26 50C33 53 47 53 54 50C51 55 45 57 40 57C35 57 29 55 26 50Z"
      fill="#701F2B"
    />
  </svg>
);

/**
 * Auspicious Lord Ganesha Linework Motif.
 */
export const GaneshaMotif: React.FC<{ size?: number; className?: string }> = ({
  size = 54,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Crown / Mukut */}
    <path
      d="M44 14L50 8L56 14L52 20H48L44 14Z"
      fill="#B08D57"
      stroke="#701F2B"
      strokeWidth="1.5"
    />
    {/* Ganesha Tilak */}
    <path
      d="M46 22H54M48 25H52M50 22V32"
      stroke="#701F2B"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Head and Ears */}
    <path
      d="M32 28C22 30 20 42 26 46C31 49 35 44 37 38"
      stroke="#B08D57"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M68 28C78 30 80 42 74 46C69 49 65 44 63 38"
      stroke="#B08D57"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Trunk and Face (Omkar Swaroop) */}
    <path
      d="M42 28C42 36 43 45 44 54C45 64 48 74 58 74C65 74 68 68 67 62C66 57 60 56 57 60C55 63 56 67 59 67"
      stroke="#701F2B"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    {/* Modak on Palm */}
    <circle cx="34" cy="62" r="4.5" fill="#B08D57" stroke="#701F2B" strokeWidth="1.2" />
    <path d="M34 56L34 58" stroke="#701F2B" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Traditional Ornamental Corner Piece for Royal Invitation Frames.
 */
export const RoyalCornerOrnament: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
}> = ({ position, size = 32 }) => {
  const transform = {
    'top-left': 'rotate(0)',
    'top-right': 'rotate(90deg)',
    'bottom-right': 'rotate(180deg)',
    'bottom-left': 'rotate(270deg)',
  }[position];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform, transformOrigin: 'center' }}
      aria-hidden="true"
    >
      <path
        d="M2 38V12C2 6.47715 6.47715 2 12 2H38"
        stroke="#B08D57"
        strokeWidth="2"
      />
      <path
        d="M6 38V14C6 9.58172 9.58172 6 14 6H38"
        stroke="#701F2B"
        strokeWidth="1"
      />
      <circle cx="14" cy="14" r="3" fill="#B08D57" />
      <path d="M2 2L14 14" stroke="#B08D57" strokeWidth="1.5" />
    </svg>
  );
};
