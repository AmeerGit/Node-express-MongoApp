import { Request, Response } from 'express';

export const getallJobs = (req : Request, res : Response) => {
    res.send('Get all jobs route');
    }

export const getJob = (req : Request, res : Response) => {
    res.send('Get job route');
    }

export const createJob = (req : Request, res : Response) => {
    res.send('Create job route');
    }

export const updateJob = (req : Request, res : Response) => {
    res.send('Update job route');
    }

export const deleteJob = (req : Request, res : Response) => {
    res.send('Delete job route');
    }
