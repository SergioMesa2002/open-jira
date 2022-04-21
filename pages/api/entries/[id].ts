import { NextApiRequest, NextApiResponse } from 'next';
import { Entry } from '../../../models';
import { db } from '../../../database';
import { Data } from './index';
import mongoose from 'mongoose';

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>) => {

  const { id = '' } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      message: 'id isnt valid'
    });
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);
    default:
      return res.status(400).json({
        message: 'doesnt method'
      });
  }
};


const updateEntry = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>) => {

  const { id = '' } = req.query;

  try {
    await db.connect();

    const entryToUpdate = await Entry.findById(id);

    if (!entryToUpdate) {
      return res.status(400).json({
        message: 'there isnt Entry with these id' + id
      });
    }

    const {
      description = entryToUpdate.description,
      status = entryToUpdate.status
    } = req.body;

    const updatedEntry =
      await Entry.findByIdAndUpdate(id, { description, status },
        { runValidators: true, new: true });

    await db.disconnect();
    return res.status(200).json(updatedEntry!);
  } catch (e) {
    await db.disconnect();
    console.log(e);
    return res.status(500).json({
      message: 'test server console'
    });
  }

};
