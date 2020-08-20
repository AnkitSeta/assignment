export interface StudentResult {
  name: string,
  marks ?: Marks,
  rollNumber: string,
  totalMarks ?: number,
  status ?: Status
}

export interface Marks{
  Maths: string,
  English:string,
  Science: string
}

type Status = 'pass' | 'fail' | 'topper';