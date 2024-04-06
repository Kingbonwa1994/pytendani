import { createClient } from "@/utils/supabase/server";
import { Property, Image } from "@/components/property-details";


const supabase = createClient()

export async function createProperty(data: Property) {
    // data object should include property details like name, description, etc.
    // ... (extract property details from data object)
  
    // Assuming comma-separated image URLs are provided in a 'images' field within data
    const imageUrls = data.images.split(',');
  
    try {
      const { data, error } = await supabase
        .from('properties')
        .insert({
          name,
          description,
          address,
          city,
          state,
          zip,
          images: imageUrls,
          // ... other property details
        });
  
      if (error) {
        console.error('Error creating property:', error);
        throw error;
      }
  
      console.log('Property created:', data);
      return data;
    } catch (error) {
      throw error;
    }
  }
  