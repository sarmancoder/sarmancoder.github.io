import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { ContactForm } from './ContactForm'

export default function DialogContactForm() {
    return (
        <Dialog>
            <DialogTrigger render={<div />}>
                <Button  className="lg:( text-xl h-13 w-50 rounded-full cursor-pointer)">Contáctame</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>¿Que necesitas?</DialogTitle>
                    <DialogDescription  render={<div />}>
                        <ContactForm />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
