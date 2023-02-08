// FOR REDIS WE USE LOWERCASE AND FOR DATABASE WE USE UPPER CASE.

const LATEST_SMS_OTP = 'latest_sms_otp';
const CURRENT_JOB_STATUS = 'job_status';

const USER_SESSIONS = {
    ACTIVE : 'ACTIVE',
    CLOSED : 'CLOSED'
}

const JOB_STATUSES = {
    PENDING : 'PENDING',
    FAILED : 'FAILED',
    PASSED : 'PASSED'
}

const JOB_STATUS_LEVELS = {
    DOCUMENT_VERIFICATION : 'DOCUMENT_VERIFICATION',
    BACKGROUND_CHECK : 'BACKGROUND_CHECK',
    SCHEDULED_INTERVIEWS : 'SCHEDULED_INTERVIEWS',
    HIRED : 'HIRED'
}

const REFERRAL_STATUS = {
    INITIATED : 'INITIATED',
    PENDING :   'PENDING',
    PROGRESS : 'IN PROGRESS',
    REFERRED : 'REFERRED'
}

const DOCUMENTS = {
    ADHARCARD : 'adharcard',
    PANCARD :   'pancard',
    DRIVING_LICENSE : 'drivinglicense',
}

module.exports = {
    LATEST_SMS_OTP,
    USER_SESSIONS,
    JOB_STATUSES,
    JOB_STATUS_LEVELS,
    CURRENT_JOB_STATUS,
    REFERRAL_STATUS,
    DOCUMENTS
}


