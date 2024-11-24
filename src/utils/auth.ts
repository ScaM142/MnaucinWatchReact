export const hashPassword = async (password: string): Promise<string> => {
    console.log('Starting password hashing...'); // Debug log
    
    try {
      // Convert password to buffer
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      
      // Hash using SHA-256
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      
      // Convert to hex string
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
        
      console.log('Hash generated successfully');
      return hashHex;
      
    } catch (error) {
      console.error('Password hashing failed:', error);
      throw error;
    }
  };