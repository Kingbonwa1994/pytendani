import React from 'react'


export interface Image {
    id: number;
    property_id: number;
    url: string;
    caption?: string;
    created_at: Date;
    updated_at: Date;
  }
  export interface Property {
    id: number;
    name: string;
    description?: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    created_at: Date;
    updated_at: Date;
  }


export default function PropertyDetails(property: Property, images:Image[]) {
  return (
    <div>property-details</div>
  )
}
