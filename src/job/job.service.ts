import { Injectable } from '@nestjs/common';
import { JobInterface } from './interfaces/job.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class JobService {

  constructor(
    @InjectModel('Job')
    private readonly jobModel: Model<JobInterface>
  ) {
  }

  async find(id: string): Promise<JobInterface> {
    return await this.jobModel.findOne({
      _id: id
    });
  }

  
}
