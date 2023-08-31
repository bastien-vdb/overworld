import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import UserBoxInfo from '@/components/header/avatar/UserBoxInfo'; // Make sure to adjust the import path

jest.mock('next-auth/react');

describe('UserBoxInfo Component', () => {
  it('renders without crashing', () => {
    useSession.mockReturnValue({ data: { user: { name: 'Bastien vermot de boisrolin', email: 'bastien.deboisrolin@gmail.com' } } }) as any;

    render(<UserBoxInfo />);

    expect(screen.getByText('Bastien vermot de boisrolin')).toBeInTheDocument();
    expect(screen.getByText('bastien.deboisrolin@gmail.com')).toBeInTheDocument();
  });

  it('renders correctly in dark mode', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-color-scheme: dark)',
    }));
    
    useSession.mockReturnValue({ data: { user: { name: 'John Doe', email: 'john@example.com' } } });
  
    render(<UserBoxInfo />);
    
   
    it('renders without user data', () => {
        useSession.mockReturnValue({ data: { user: null } });
      
        render(<UserBoxInfo />);
      
        // Assertions for rendering without user data
      });
  });

  it('displays truncated email', () => {
    useSession.mockReturnValue({ data: { user: { name: 'Bas VDB', email: 'verylongemail@teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest.com' } } });
  
    render(<UserBoxInfo />);
  
    // Assertions for truncated email display
  });
});
