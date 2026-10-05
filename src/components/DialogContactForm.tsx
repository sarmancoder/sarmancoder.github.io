import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { ContactForm } from './ContactForm'

export default function DialogContactForm() {
    return (
        <Dialog>
            <DialogTrigger render={<div />}>
                <Button className="mt-8">Contáctame</Button>
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
